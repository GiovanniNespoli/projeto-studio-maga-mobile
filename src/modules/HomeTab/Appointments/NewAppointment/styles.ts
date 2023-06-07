import theme from "@styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import DropDownPicker from 'react-native-dropdown-picker';

export const Container = styled.View`
  justify-content: flex-start;
  align-items:center;
  flex: 1;
  padding: ${RFValue(26)}px;
  background-color:  ${theme.colors.primary};  
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: ${RFValue(8)}px;
    border-radius: ${RFValue(16)}px;
    width: 100%;
    margin-top: ${RFValue(50)}px;
`;

export const HeaderTitle = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${theme.text.outfit.medium};
    color: ${theme.colors.text};    
    margin-left: ${RFValue(70)}px;
`;

export const BackArrow = styled.TouchableOpacity`
    font-size: ${RFValue(12)}px;
    font-family: ${theme.text.outfit.medium};
    color: ${theme.colors.text};    
    margin-left: ${RFValue(-70)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${theme.text.outfit.medium};
    color: ${theme.colors.text};    
    align-self: flex-start;
    margin-top: ${RFValue(15)}px;
    margin-bottom: ${RFValue(15)}px;
`;

export const ServiceSelect = styled(DropDownPicker)`
  width: 100%;
  height: ${RFValue(59)}px;
  border: 0;
  background-color:  ${theme.colors.input};  
  font-family: ${theme.text.outfit.medium};
  elevation: 4;
  shadow-offset:{  width: 0,  height: 2,  };
  shadow-color: #000000;
  shadow-opacity: 0.19;
  shadow-radius: 3.2px;
`;
