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
`;

export const ModalArea = styled.View`
  width: 100%;
  height: 100%;
`;

export const CloseModal = styled.View`
  width: 100%;
  height: 100%;
`;

export const PickerContent = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  shadow-color: rgba(0, 0, 0, 0.25);
  shadow-offset: 0px 0px;
  shadow-opacity: 8;
  elevation: 10;
  background-color: ${theme.colors.primary};
`;

export const PickerHeader = styled.View`
  width: 100%;
  height: 20%;
  background-color: ${theme.colors.tertiary};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${theme.colors.primary};
  font-size: ${RFValue(16)}px;
  font-family: Montserrat_700Bold;
`;

export const PickerArea = styled.View`
  width: 100%;
  height: 80%;
`;

export const PickerItemContent = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(50)}px;
  border-top-width: 0.5px;
  border-color: #eeeeee;
`;

export const PickerItem = styled.Text`
  width: 100%;
  height: ${RFValue(20)}px;
  margin: auto;
  text-align: center;
  font-family: Montserrat_700Bold;
  color: ${theme.text.color.secondary};
  font-size: ${RFValue(14)}px;
`;

export const ContainerLabel = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${theme.colors.text};
  font-family: ${theme.text.outfit.medium};
`;
