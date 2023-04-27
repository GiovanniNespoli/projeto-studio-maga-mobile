import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '@modules/Welcome';

const { Navigator, Screen } = createStackNavigator();

export default function StackRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='Welcome'
                component={Welcome}
            />
        </Navigator>
    )
}