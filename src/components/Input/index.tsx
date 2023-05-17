import React, { useRef } from "react";
import { TextInputProps } from "react-native/types";
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