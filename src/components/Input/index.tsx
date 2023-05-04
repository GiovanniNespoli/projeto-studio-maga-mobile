import React, { useRef, useEffect } from "react";
import { TextInputProps } from "react-native/types";
import { Text } from "react-native";
import { Container } from "./styles";

interface IInputsProps extends TextInputProps {
    name: string
}

export const Input: React.FC<IInputsProps> = ({ name, ...rest }) => {
    const inputElementRef = useRef<any>(null);

    return (
        <Container
            ref={inputElementRef}
            {...rest}
        >
        </Container>
    )
}