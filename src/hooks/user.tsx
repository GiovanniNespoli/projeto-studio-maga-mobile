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
  Login(email: string, password: string): void;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider: React.FC = ({ children }) => {
  const [sound, setSound] = useState<Audio.Sound>();

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

  const Login = useCallback(async (email: string, password: string) => {
    await api
      .post("/users/auth", { email, password })
      .then(async (promise) => {
        Toast.show({
          type: "success",
          text1: "Sucesso",
          text2: "Login realizado com sucesso ✅",
        });
        await playSound();
        return promise;
      })
      .catch((err) => {
        return err;
      });
  }, []);

  const CreateUser = useCallback(
    async ({ email, name, password, phone }: ICreateUser) => {
      console.log(email, name, password, phone);

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
    <UserContext.Provider value={{ CreateUser, Login }}>
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
