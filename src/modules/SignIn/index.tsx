import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList, auth } from '@routes/routesPath';
import { Container, NavigationText, SignInContainer, SignInForm, NavigationContent } from './styles';
import { Content } from '@components/Content';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '@styles/theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export function SignIn() {
    const { navigate } = useNavigation<StackNavigationProp<AuthParamList, auth>>();
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
                                onPress={() => navigate('hometab')}
                            />
                        </SignInForm>
                        <NavigationContent>
                            <NavigationText>Não possui uma conta ?</NavigationText>
                            <Button
                                style={{
                                    width: "70%",
                                    height: RFValue(39),
                                    backgroundColor: theme.colors.tertiary,
                                }}
                                label='Cadastre-se'
                                fontSize={16}
                            />
                        </NavigationContent>
                    </KeyboardAwareScrollView>
                </SignInContainer>
            </Content>
        </Container>
    );
};