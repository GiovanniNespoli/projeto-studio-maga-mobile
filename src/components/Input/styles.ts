import theme from "@styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TextInput`
    height: ${RFValue(59)}px;
    width:  100%;
    background-color: ${theme.colors.input};
    border-radius: ${RFValue(15)}px;
    padding-left: ${RFValue(15)}px;
    color: ${theme.text.color.primary};
    font-family: ${theme.text.outfit.medium};
    font-size: ${RFValue(15)}px;
    margin-top: ${RFValue(25)}px;
`;