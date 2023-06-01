import React from "react";
import { Container, Logo, Title, SubTitle } from "./styles";

interface IHeaderProps {
    title: string;
    subTitle: string;
}

export const Header: React.FC<IHeaderProps> = ({ title, subTitle }) => {
    return (
        <Container>
            <Logo source={require("@assets/logo.png")} />
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
        </Container>
    )
}