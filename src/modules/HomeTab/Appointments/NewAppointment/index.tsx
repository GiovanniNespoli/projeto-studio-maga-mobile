import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList, auth } from "@routes/routesPath";
import {
  Container,
  Header,
  HeaderTitle,
  IconButton,
  SelectContent,
  Title,
} from "./styles";
import { Content } from "@components/Content";

export function NewAppointment() {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<AuthParamList, auth>>();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);
  return (
    <Container>
      <Content marginTopNumber={0}>
        <Header>
          <IconButton onPress={() => {}}>
            <Icon
              name={"arrow-left"}
              type="octicon"
              color={"#6e6e6e"}
              size={30}
            />
          </IconButton>
          <HeaderTitle>Agenda de horários</HeaderTitle>
          <IconButton disabled={true}>
          </IconButton>
        </Header>

        <SelectContent>
          <Title>Serviço Selecionado :</Title>
          {/* <SelectService/> */}
        </SelectContent>
        <SelectContent>
          <Title></Title>
        </SelectContent>
      </Content>
    </Container>
  );
}
