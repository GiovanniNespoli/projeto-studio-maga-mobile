import React, { useRef } from "react";
import { Container, SignInContainer, SignInForm } from "./styles";
import { Content } from "@components/Content";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AccontNavigation } from "@components/AccontNavigation";

export function SignIn() {
  const formRef = useRef(null);

  return (
    <Container>
      <Content marginTopNumber={0}>
        <SignInContainer>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <Header
              subTitle="Preencha os campos para entrar"
              title="Seja Bem-vindo(a)"
            />
            <SignInForm ref={formRef} onSubmit={() => {}}>
              <Input name="email" placeholder="Email" />
              <Input
                name="password"
                placeholder="Senha"
                secureTextEntry={true}
              />
              <Button label="Login" fontSize={22} />
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
