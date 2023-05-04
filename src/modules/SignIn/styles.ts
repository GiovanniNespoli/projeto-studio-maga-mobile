import theme from "@styles/theme";
import styled from "styled-components/native"
import { Form } from '@unform/mobile';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primary};
`;

export const SignInForm = styled(Form)`
    width: 100%;
    height: 45%;
    justify-content: space-evenly;
    align-items: center;
`;

export const SignInContainer = styled.View`
    margin: auto;
    width: 100%;
    height: 75%;
    align-items: center;
    justify-content: center;
`;
export const NavigationText = styled.Text``;

export const NavigationContent = styled.View`
    width: 100%;
    height: 13%;
    align-items: center;
    justify-content: space-between; 
`;