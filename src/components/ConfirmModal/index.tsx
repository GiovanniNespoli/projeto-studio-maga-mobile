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
} from "./styles";

interface IConfirmModal {
  value: boolean;
}

export default function ConfirmModal({ value, ...rest }: IConfirmModal) {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    console.log(value);
    if (value === false) {
      console.log("é false");
      setModalVisible(false);
    } else {
      console.log("é true");
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
                <AlertButton alertType={false}></AlertButton>
                <AlertButton alertType={true}></AlertButton>
              </AlertButtonContent>
            </ModalArea>
          </ModalContent>
        </BlurContent>
      </Modal>
    </>
  );
}
