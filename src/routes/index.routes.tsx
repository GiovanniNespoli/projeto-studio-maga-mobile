import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "./auth/auth.routes";
import StackRoutes from "./stack/stack.routes";

export default function Routes() {
    return (
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer>
    )
}