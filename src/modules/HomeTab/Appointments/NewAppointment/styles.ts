import theme from "@styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import DropDownPicker from "react-native-dropdown-picker";

export const Container = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;
export const Header = styled.View`
  width: 100%;
  height: ${RFValue(100)}px;
  background-color: red;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const IconButton = styled.TouchableOpacity``;
export const HeaderTitle = styled.Text`
  font-family: ${theme.text.montserrat.bold};
  font-size: ${RFValue(19)}px;
  color: ${theme.colors.textHeader};
`;
export const SelectContent = styled.View``;
export const Title = styled.Text`
  font-family: ${theme.text.montserrat.bold};
  font-size: ${RFValue(20)}px;
  color: ${theme.colors.title};
`;
