import theme from "@styles/theme";
import styled from "styled-components/native"
import { Form } from '@unform/mobile';
import { RFValue } from "react-native-responsive-fontsize";

export const Button1 = styled.TouchableOpacity`
    align-items: center ;
    justify-content: center;
    background-color: ${theme.compcolors.pink};
    width: ${RFValue(140)}px;
    height: ${RFValue(50)}px;
    border-radius: ${RFValue(10)}px;
    margin-top: ${RFValue(30)}px;
`;

export const ButtonText = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${theme.compcolors.white}; 
    font-family: ${theme.text.outfit.medium};
`;

export const Text1 = styled.Text`
    font-size: ${RFValue(19)}px;
    color: ${theme.text.color.primary}; 
    width: ${RFValue(250)}px;
    margin-top: ${RFValue(40)}px;
    text-align: center;
    font-family: ${theme.text.outfit.bold};
`;

export const Text2 = styled.Text`
    font-size: ${RFValue(19)}px;
    color: ${theme.compcolors.pink}; 
    width: ${RFValue(230)}px;
    margin-top: ${RFValue(5)}px;
    text-align: center;
    font-family: ${theme.text.outfit.bold}; 
`;

export const Check = styled.Image`
    width: ${RFValue(190)}px;
    height: ${RFValue(180)}px;
`;

export const Footer = styled.Image`
    width: ${RFValue(210)}px;
    height: ${RFValue(65)}px;
    margin-bottom: ${RFValue(10)}px;
`;