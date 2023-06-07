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
import { Content } from "@components/Content";
import { MaskedInput } from "@components/MaskedInput";

export function SignUp() {
  const { navigate } =
    useNavigation<StackNavigationProp<AuthParamList, auth>>();

  return (
    <Container>
      <Content marginTopNumber={20}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Header
            title="Seja Bem-vindo(a)"
            subTitle="Preencha os campos para cadastrar-se"
          />
          <SignUpForm>
            <Input placeholder="Nome completo" name="Nome completo" />
            <Input
              placeholder="Email"
              keyboardType="email-address"
              name="Email"
            />
            <Input placeholder="Senha" secureTextEntry={true} name="Senha" />
            <MaskedInput
              placeholder="Telefone"
              keyboardType="phone-pad"
              name="Telefone"
            />
            <Button
              fontSize={20}
              label="Cadastre-se"
              onPress={() => {
                navigate("codevalidation")
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
