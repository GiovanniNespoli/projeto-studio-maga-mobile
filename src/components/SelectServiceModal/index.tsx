import React, { useEffect, useState } from "react";
import { Modal, StatusBar, TouchableWithoutFeedback } from "react-native";
import {
  BlurContent,
  CloseModal,
  Container,
  ContainerLabel,
  ItemsList,
  ModalArea,
  ModalContent,
  PickerArea,
  PickerContent,
  PickerHeader,
  PickerItem,
  PickerItemContent,
  Title,
} from "./styles";

interface items {
  id: string;
  label: string;
}

interface IPickerProps {
  data: items[];
  selectedValue(value: string): void;
}

export default function SelectServiceModal({
  data,
  selectedValue,
  ...rest
}: IPickerProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    selectedValue(label);
  }, [label]);

  const Item = ({ label, id }) => {
    return (
      <>
        <PickerItemContent
          onPress={() => {
            setModalVisible(false);
            setLabel(label);
          }}
        >
          <PickerItem>{label}</PickerItem>
        </PickerItemContent>
      </>
    );
  };

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
              <PickerContent>
                <PickerHeader>
                  <Title>Todos os serviços</Title>
                </PickerHeader>
                <PickerArea>
                  <ItemsList
                    {...rest}
                    //@ts-ignore
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    scrollEnabled={true}
                    nestedScrollEnabled={true}
                    renderItem={({ item }) => (
                      <Item label={item.label} id={item.id} />
                    )}
                  />
                </PickerArea>
              </PickerContent>
            </ModalArea>
          </ModalContent>
        </BlurContent>
      </Modal>
      <Container
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <ContainerLabel>{label}</ContainerLabel>
      </Container>
    </>
  );
}
