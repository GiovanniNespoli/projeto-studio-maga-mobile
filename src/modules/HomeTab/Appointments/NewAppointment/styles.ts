import theme from "@styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import HorizontalDatePicker from "@logisticinfotech/react-native-horizontal-date-picker";

export const Container = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  background-color: ${theme.colors.primary};
`;
export const Grid = styled.View`
  width: 100%;
  height: 90%;
  align-items: center;
  justify-content: space-around;
  margin: auto;
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
  color: ${theme.colors.textHeader};
`;
export const SelectContent = styled.View`
  width: 100%;
`;
export const Title = styled.Text`
  font-family: ${theme.text.montserrat.bold};
  font-size: ${RFValue(20)}px;
  color: ${theme.colors.title};
`;

export const DatePicker = styled(HorizontalDatePicker)`
  background-color: ${theme.text.color.secondary};
`;

export const TotalValueContent = styled.View`
  width: 100%;
  height: ${RFValue(60)}px;
  flex-direction: row;
  align-items: center;
`;

export const TotalValue = styled.Text`
  font-family: ${theme.text.montserrat.bold};
  font-size: ${RFValue(16)}px;
  color: ${theme.colors.tertiary};
  background-color: ${theme.colors.input};
  padding: ${RFValue(10)}px;
  border-radius: ${RFValue(12)}px;
`;
