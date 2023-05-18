import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList, auth } from '@routes/routesPath';
import { AccontNavigationContent, Container, Grid, SignUpForm } from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { AccontNavigation } from '@components/AccontNavigation';

export function SignUp() {

    const { navigate } = useNavigation<StackNavigationProp<AuthParamList, auth>>();

    return (
        <KeyboardAwareScrollView>
            <Container>
                <Grid>
                    <Header
                        title='Seja Bem-vindo(a)'
                        subTitle='Preencha os campos para cadastrar-se'
                    />
                    <SignUpForm>
                        <Input name='name' />
                        <Input name='email' />
                        <Input name='password' />
                        <Input name='phone' />
                    </SignUpForm>
                    <AccontNavigationContent>
                        <AccontNavigation navigation='signin' />
                    </AccontNavigationContent>
                </Grid>
            </Container>
        </KeyboardAwareScrollView>
    );
};