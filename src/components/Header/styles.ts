import theme from "@styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native"

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(150)}px;
    align-items: center;
    justify-content: space-between;
`;
export const Logo = styled.Image``;
export const Title = styled.Text`
    font-family: ${theme.text.montserrat.bold};
    font-size: ${RFValue(18)}px;
    color: ${theme.text.color.primary}
`;
export const SubTitle = styled.Text`
    font-family: ${theme.text.outfit.medium};
    font-size: ${RFValue(16)}px;
    color: ${theme.text.color.secondary};
`;