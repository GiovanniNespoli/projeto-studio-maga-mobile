import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList, auth } from '@routes/routesPath';
import { Container, SignInContainer, SignInForm } from './styles';
import { Content } from '@components/Content';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '@styles/theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AccontNavigation } from '@components/AccontNavigation';

export function SignIn() {
    const formRef = useRef(null);

    return (
        <Container>
            <Content>
                <SignInContainer>
                    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                        <Header
                            subTitle='Preencha os campos para entrar'
                            title='Seja Bem-vindo(a)' />
                        <SignInForm ref={formRef} onSubmit={() => { }}>
                            <Input
                                name='email'
                                placeholder='Email'
                            />
                            <Input
                                name='password'
                                placeholder='Senha'
                                secureTextEntry={true}
                            />
                            <Button
                                label='Login'
                                fontSize={22}
                            />
                        </SignInForm>
                        <AccontNavigation navigation='signup'/>
                    </KeyboardAwareScrollView>
                </SignInContainer>
            </Content>
        </Container>
    );
};