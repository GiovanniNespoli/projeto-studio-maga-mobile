import React, { useCallback, useRef, useState } from "react";
import { Container, SignInContainer, SignInForm } from "./styles";
import { Content } from "@components/Content";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AccontNavigation } from "@components/AccontNavigation";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList, auth } from "@src/routes/routesPath";
import * as ImagePicker from "expo-image-picker";
import { useImage } from "../../hooks/image";
import { useUser } from "../../hooks/user";

export function SignIn() {
  const { Login } = useUser();

  const { navigate } =
    useNavigation<StackNavigationProp<AuthParamList, auth>>();
  const { saveImage } = useImage();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      saveImage(result.assets[0].uri);
    }
  };

  const loginHandle = useCallback(async () => {

    if (email === "adm@gmail.com" && password === "adm123") {
      return navigate("adm");
    }
    
    const verify = await Login(email, password);

    if (verify) {
      return navigate("hometab");
    }

    return;
  }, [email, password]);

  return (
    <Container>
      <Content marginTopNumber={0}>
        <SignInContainer>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <Header
              subTitle="Preencha os campos para entrar"
              title="Seja Bem-vindo(a)"
            />
            <SignInForm onSubmit={() => {}}>
              <Input
                name="email"
                placeholder="Email"
                onChangeText={(value) => {
                  setEmail(value);
                }}
              />
              <Input
                name="password"
                placeholder="Senha"
                secureTextEntry={true}
                onChangeText={(value) => {
                  setPassword(value);
                }}
              />
              <Button
                label={"Selecionar foto de perfil"}
                fontSize={20}
                onPress={pickImage}
              />
              <Button
                label="Login"
                fontSize={22}
                onPress={() => {
                  loginHandle();
                }}
              />
            </SignInForm>
            <AccontNavigation
              buttonText="Cadastre-se"
              subTitleText="Não possui uma conta ?"
              navigation="signup"
            />
          </KeyboardAwareScrollView>
        </SignInContainer>
      </Content>
    </Container>
  );
}
