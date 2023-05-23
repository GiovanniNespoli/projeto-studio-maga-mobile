import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList, auth } from "@routes/routesPath";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { AccontNavigation } from "@components/AccontNavigation";
import { Button } from "@components/Button";
import { Container, SignUpForm } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Content } from "@components/Content";

export function SignUp() {
  const { navigate } =
    useNavigation<StackNavigationProp<AuthParamList, auth>>();

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Content>
          <Header
            title="Seja Bem-vindo(a)"
            subTitle="Preencha os campos para cadastrar-se"
          />
          <SignUpForm>
            <Input placeholder="Nome completo" name="Nome completo" />
            <Input placeholder="Email" name="Email" />
            <Input placeholder="Senha" name="Senha" />
            <Input placeholder="Telefone" name="Telefone" />
            <Button fontSize={20} label="Cadastre-se" />
          </SignUpForm>
          <AccontNavigation navigation="singin" />
        </Content>
      </Container>
    </KeyboardAwareScrollView>
  );
}
