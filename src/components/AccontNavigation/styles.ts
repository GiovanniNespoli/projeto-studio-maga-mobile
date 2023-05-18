import styled from "styled-components/native"
import theme from "@styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const NavigationText = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${theme.text.outfit.medium};
    color: ${theme.colors.text};
    margin-top: ${RFValue(20)}px;       
`;

export const NavigationContent = styled.View`
    width: 100%;
    height: 13%;
    align-items: center;
    justify-content: space-between; 
`;