import theme from "@styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: ${RFValue(-20)}px;
  margin-bottom: ${RFValue(0)}px;
  justify-content: center;
  align-items:center;
  width: ${RFValue(320)}px;
  height: ${RFValue(300)}px;
  flex-direction: row;
`;

export const Content = styled.View`
    margin-top: ${RFValue(10)}px;
    margin-bottom: ${RFValue(10)}px;
    justify-content: flex-start;
    align-items:center;
    flex-direction: row;
`;

export const Description = styled.View`
`;

export const Label = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${theme.text.outfit.medium};
    color: ${theme.colors.text};     
`;

export const Price = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${theme.text.outfit.medium};
    color: ${theme.colors.text};    
    align-self: flex-start;  
`;

export const Icon = styled.Image`
  justify-content: center;
  align-items:center;
  width: ${RFValue(45)}px;
  height: ${RFValue(44)}px;
  background: ${theme.colors.secondary};
  margin-right: ${RFValue(5)}px;
  border-radius: ${RFValue(50)}px;
`;
