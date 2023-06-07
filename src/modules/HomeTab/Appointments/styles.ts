import theme from "@styles/theme";
import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize";
import HorizontalDatePicker from '@logisticinfotech/react-native-horizontal-date-picker'

export const Container = styled.ScrollView`
  flex-direction: column;
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

// export const Titulo = styled.Text`
//     font-size: ${RFValue(27)}px;
//     font-family: ${theme.text.outfit.medium};
//     color: ${theme.colors.tertiary};
//     margin-top: ${RFValue(20)}px; 
//     margin-bottom: ${RFValue(20)}px; 
//     align-self: flex-start;
// `;

export const Texto = styled.Text`
font-size: ${RFValue(17)}px;
font-family: ${theme.text.outfit.medium};
color: ${theme.colors.text};
margin-bottom: ${RFValue(6)}px; 
`;

export const Data = styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${theme.text.outfit.thin};
color: ${theme.text.color.secondary};
`;

export const Name = styled.Text`
    font-size: ${RFValue(27)}px;
    font-family: ${theme.text.outfit.medium};
    color: ${theme.colors.text};
    margin-top: ${RFValue(20)}px;   
`;

export const Containers = styled.View`
  height: ${RFValue(130)}px;
  width: ${RFValue(330)}px;
  background-color: white;
  border-radius: ${RFValue(10)}px;
  shadow-color: black;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.2;
  shadow-radius: 6px;
  padding-left: ${RFValue(20)}px;
  justifyContent: center;
  margin-bottom:${RFValue(20)}px;
`;

export const Btn1 = styled.TouchableOpacity`
  height: ${RFValue(40)}px;
  width: ${RFValue(100)}px;
  background-color: ${theme.colors.button};
  margin-top:${RFValue(10)}px;
  margin-right:${RFValue(14)}px;
  border-radius: ${RFValue(10)}px;
  alignItems: center;
  justifyContent: center;
`;

export const Btn2 = styled.TouchableOpacity`
  height: ${RFValue(40)}px;
  width: ${RFValue(100)}px;
  background-color: ${theme.text.color.secondary};
  margin-top:${RFValue(10)}px;
  margin-right:${RFValue(5)}px;
  border-radius: ${RFValue(10)}px;
  alignItems: center;
  justifyContent: center;
`;

export const BtnText = styled.Text`
font-size: ${RFValue(17)}px;
font-family: ${theme.text.outfit.medium};
color: white;
`;