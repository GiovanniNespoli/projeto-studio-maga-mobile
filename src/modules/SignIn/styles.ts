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
    justify-content: space-evenly;
    align-items: center;
`;

export const SignInContainer = styled.View`
    margin: auto;
    width: 100%;
    align-items: center;
    justify-content: center;
`;