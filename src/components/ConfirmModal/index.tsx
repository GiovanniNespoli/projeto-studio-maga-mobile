import React, { useEffect, useState } from "react";
import { Modal, StatusBar, TouchableWithoutFeedback } from "react-native";
import {
  BlurContent,
  CloseModal,
  Container,
  ItemsList,
  ModalArea,
  ModalContent,
  AlertButton,
  AlertButtonContent,
  AlertText,
  AlertTitle,
  AlertLabel,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList, auth } from "@src/routes/routesPath";

interface IConfirmModal {
  value: boolean;
}

export default function ConfirmModal({ value, ...rest }: IConfirmModal) {
  const [modalVisible, setModalVisible] = useState(false);

  const { navigate } = useNavigation<StackNavigationProp<AuthParamList, auth>>();


  useEffect(() => {
    console.log(value);
    if (value === false) {
      setModalVisible(false);
    } else {
      setModalVisible(true);
    }
  }, [value]);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <BlurContent intensity={200}>
          <TouchableWithoutFeedback
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <CloseModal />
          </TouchableWithoutFeedback>
          <ModalContent>
            <ModalArea>
              <AlertTitle>Alerta</AlertTitle>
              <AlertText>
                Deseja cancelar hora marcada com Adriana Macedo ás 13:30?
              </AlertText>
              <AlertButtonContent>
                <AlertButton onPress={() => {
                  setModalVisible(false)
                }} alertType={true}><AlertLabel>Não</AlertLabel></AlertButton>
                <AlertButton onPress={() => { navigate("successappointment") }} alertType={false}><AlertLabel>Sim</AlertLabel></AlertButton>
              </AlertButtonContent>
            </ModalArea>
          </ModalContent>
        </BlurContent>
      </Modal>
    </>
  );
}
