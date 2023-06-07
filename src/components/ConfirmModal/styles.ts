import theme from "@styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";
import { BlurView } from "expo-blur";
import { FlatList } from "react-native";

export const Container = styled.TouchableOpacity`
  margin-top: ${RFValue(15)}px;
  width: 100%;
  height: ${RFValue(60)}px;
  background-color: ${theme.colors.input};
  border-radius: ${RFValue(15)}px;
  justify-content: center;
  padding-left: ${RFValue(15)}px;
`;

export const ContainerText = styled.Text`
  font-family: Montserrat_700Bold;
  color: ${theme.colors.primary};
  font-size: ${RFValue(14)}px;
`;

//@ts-ignore
export const ItemsList = styled(FlatList as new () => FlatList<DATA>)`
  padding: 2px 24px;
`;

export const NonSelected = styled.Text`
  font-family: Montserrat_700Bold;
  color: ${theme.colors.secondary};
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled.View`
  width: ${RFValue(29.92)}px;
  height: ${RFValue(31)}px;
  border-radius: ${RFValue(8)}px;
  justify-content: center;
  align-items: center;
`;

export const BlurContent = styled(BlurView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.3);
`;

export const ModalContent = styled.View`
  width: 85%;
  height: 40%;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #fff;
  border-radius: 20px;
  shadow-color: rgba(0, 0, 0, 0.25);
  shadow-offset: 0px 0px;
  shadow-opacity: 8;
  elevation: 10;
`;

export const ModalArea = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

export const CloseModal = styled.View`
  width: 100%;
  height: 100%;
`;

interface IAlertProps {
  alertType: boolean;
}

export const AlertTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${theme.text.montserrat.bold};
`;
export const AlertText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${theme.text.outfit.medium};
  text-align: center;
  width: 65%;
`;
export const AlertButtonContent = styled.View`
  width: 100%;
  height: 20%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const AlertButton = styled.TouchableOpacity<IAlertProps>`
  width: 30%;
  height: ${RFValue(35)}px;
  background-color: ${({ alertType }) => alertType ? "#7FBCAD" : "#DC6565"};
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(10)}px;
`;

export const AlertLabel = styled.Text`
  color: ${theme.colors.primary};
  font-size: ${RFValue(14)}px;
  font-family: ${theme.text.outfit.medium};
`;
