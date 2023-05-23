import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../../modules/SignIn';
import { auth } from '../routesPath';
import { SignUp } from '@modules/SignUp';
import { BottomTab } from '@src/components/BottomTab';
import { HomeTab } from '@modules/HomeTab';

const { Navigator, Screen } = createStackNavigator();

export default function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                component={HomeTab}
                name={auth.hometab}
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