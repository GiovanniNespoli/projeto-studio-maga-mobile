import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList, auth } from '@routes/routesPath';
import { Container } from './styles';
import { Content } from '@components/Content';
import { Input } from '@components/Input';

export function SignIn() {
    const { navigate } = useNavigation<StackNavigationProp<AuthParamList, auth>>();

    return (
        <Container>
            <Content>
                <Input
                    name='test'
                />
            </Content>
        </Container>
    );
};