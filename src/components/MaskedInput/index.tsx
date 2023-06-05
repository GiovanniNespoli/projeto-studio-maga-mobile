import React, { useRef } from "react";
import { TextInputProps } from "react-native/types";
import { Container } from "./styles";

interface IInputsProps extends TextInputProps {
    name: string
}

export const MaskedInput: React.FC<IInputsProps> = ({ name, ...rest }) => {
    const inputElementRef = useRef<any>(null);

    return (
        <Container
            ref={inputElementRef}
            {...rest}
            mask="(99) 99999-9999"
        >
        </Container>
    )
}