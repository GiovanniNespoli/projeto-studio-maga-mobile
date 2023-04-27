import { Container } from "@modules/SignIn/styles";
import React from "react";
import { TextInputProps } from "react-native/types";
import { Text } from "react-native";

interface IInputsProps extends TextInputProps {
    name: string
}

export const Input: React.FC<IInputsProps> = ({ name, ...rest }) => {
    return (
        <Container>
            <Text>{name}</Text>
        </Container>
    )
}