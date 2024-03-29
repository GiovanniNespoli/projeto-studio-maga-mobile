import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList, auth } from "@routes/routesPath";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { AccontNavigation } from "@components/AccontNavigation";
import { Button } from "@components/Button";
import { Container, SignUpForm } from "./styles";
import { Content } from "@components/Content";
import { MaskedInput } from "@components/MaskedInput";
import { useUser } from "../../hooks/user";

export function SignUp() {
  const { navigate } =
    useNavigation<StackNavigationProp<AuthParamList, auth>>();

  const { CreateUser } = useUser();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const createHandle = useCallback(async () => {
    CreateUser({
      email,
      name,
      password,
      phone,
    });
    
    navigate("signin");
  }, [email, name, password, phone]);

  return (
    <Container>
      <Content marginTopNumber={20}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Header
            title="Seja Bem-vindo(a)"
            subTitle="Preencha os campos para cadastrar-se"
          />
          <SignUpForm>
            <Input
              placeholder="Nome completo"
              name="Nome completo"
              onChangeText={(value) => {
                setName(value);
              }}
            />
            <Input
              placeholder="Email"
              keyboardType="email-address"
              name="Email"
              onChangeText={(value) => {
                setEmail(value);
              }}
            />
            <Input
              placeholder="Senha"
              secureTextEntry={true}
              name="Senha"
              onChangeText={(value) => {
                setPassword(value);
              }}
            />
            <MaskedInput
              placeholder="Telefone"
              keyboardType="phone-pad"
              name="Telefone"
              inputValue={(value) => setPhone(value)}
            />
            <Button
              fontSize={20}
              label="Cadastre-se"
              onPress={() => {
                createHandle();
              }}
            />
          </SignUpForm>
          <AccontNavigation
            buttonText="Faça seu Login"
            subTitleText="Já possui uma conta?"
            navigation="signin"
          />
        </KeyboardAwareScrollView>
      </Content>
    </Container>
  );
}
