import theme from "@styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import HorizontalDatePicker from '@logisticinfotech/react-native-horizontal-date-picker'

export const Container = styled.View`
  justify-content: center;
  align-items:center;
  flex: 1;
  padding: ${RFValue(20)}px;
  background-color: ${theme.colors.primary};
`;

export const DatePicker = styled(HorizontalDatePicker)`
  height: 2700;
  background-color: ${theme.text.color.secondary};
`;

export const Titulo = styled.Text`
    font-size: ${RFValue(25)}px;
    font-family: ${theme.text.outfit.medium};
    color: ${theme.text.color.primary};
    margin-top: ${RFValue(20)}px; 
    margin-bottom: ${RFValue(20)}px; 
    align-self: flex-start;
`;

export const Label = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${theme.text.outfit.medium};
    color: ${theme.text.color.primary};
    margin-top: ${RFValue(20)}px; 
    margin-bottom: ${RFValue(5)}px; 
    align-self: flex-start;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(100)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const IconButton = styled.TouchableOpacity``;
export const HeaderTitle = styled.Text`
  font-family: ${theme.text.montserrat.bold};
  font-size: ${RFValue(19)}px;
  color: ${theme.colors.text};
`;