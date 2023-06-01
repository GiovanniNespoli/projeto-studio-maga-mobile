import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, ButtonLabel } from "./styles";

interface IButtonProps extends TouchableOpacityProps {
    label: string;
    fontSize: number
}

export const Button: React.FC<IButtonProps> = ({ label, fontSize, ...rest }) => {
    return (
        <Container {...rest}>
            <ButtonLabel labelFontSize={fontSize}>{label}</ButtonLabel>
        </Container>
    )
}