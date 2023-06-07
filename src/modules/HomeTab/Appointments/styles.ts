import theme from "@styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items:center;
  flex: 0.65;
`;

export const FocusContent = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 8px;
    border-radius: 16px;
`;

export const Circle = styled.View`
  background-color: #536;
  width: 50px;
  height: 50px;
  background: #daa296;
  border-radius: 50px;
  justify-content: center;
  align-items:center;
`;
