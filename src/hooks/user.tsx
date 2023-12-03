import IUser from "@src/interfaces/IUser";
import { api } from "../server/index";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Toast from "react-native-toast-message";
import { Audio } from "expo-av";

interface ICreateUser {
  name: string;
  email: string;
  password: string;
  phone: string;
}

interface IUserContext {
  CreateUser(newUser: ICreateUser): void;
  Login(email: string, password: string): Promise<boolean>;
  userLogged: IUser;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider: React.FC = ({ children }) => {
  const [sound, setSound] = useState<Audio.Sound>();
  const [userLogged, setUserLogged] = useState<IUser>({} as IUser);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/plim.mp3")
    );
    setSound(sound);

    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const Login = useCallback(
    async (email: string, password: string): Promise<boolean> => {
      const loginIntegration = await api
        .post("/users/auth", { email, password })
        .then(async (promise) => {
          Toast.show({
            type: "success",
            text1: "Sucesso",
            text2: "Login realizado com sucesso ✅",
            visibilityTime: 5000,
          });
          await playSound();
          setUserLogged(promise.data);
          return true;
        })
        .catch((err) => {
          console.log(err);
          Toast.show({
            type: "error",
            text1: "Erro",
            text2: "Email ou senha incorretos ❌",
            visibilityTime: 5000,
          });
          return false;
        });

      return loginIntegration;
    },
    []
  );

  const CreateUser = useCallback(
    async ({ email, name, password, phone }: ICreateUser) => {
      await api
        .post<IUser>("/users", {
          email,
          name,
          password,
          phone,
        })
        .then(async (promise) => {
          Toast.show({
            type: "success",
            text1: "Sucesso",
            text2: "Cadastro realizado com sucesso ✅",
          });
          await playSound();
          return promise;
        })
        .catch((err) => {
          return err;
        });
    },
    []
  );

  return (
    <UserContext.Provider value={{ CreateUser, Login, userLogged }}>
      {children}
    </UserContext.Provider>
  );
};

function useUser(): IUserContext {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}

export { useUser, UserProvider };
