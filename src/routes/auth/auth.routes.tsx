import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../../modules/SignIn';
import { auth } from '../routesPath';
import { SignUp } from '@modules/SignUp';
import { Horarios } from '@modules/Horarios';

const { Navigator, Screen } = createStackNavigator();

export default function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>

            <Screen
                component={Horarios}
                name={auth.horarios}
            />

            <Screen
                component={SignIn}
                name={auth.signin}
            />
            <Screen
                component={SignUp}
                name={auth.signup}
            />
        </Navigator>
    )
}