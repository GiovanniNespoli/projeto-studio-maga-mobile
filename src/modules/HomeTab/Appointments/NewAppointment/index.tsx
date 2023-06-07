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
  DatePicker,
  TotalValueContent,
  Grid,
  TotalValue,
} from "./styles";
import { Content } from "@components/Content";
import SelectServiceModal from "@components/SelectServiceModal";
import { RFValue } from "react-native-responsive-fontsize";
import moment from "moment";
import "moment/locale/pt-br";
import { Dimensions, StyleSheet } from "react-native";
import theme from "@styles/theme";
import { Button } from "@components/Button";

const DATA = [
  {
    id: "1",
    label: "Unhas simples",
  },
  {
    id: "2",
    label: "Francesinha",
  },
  {
    id: "3",
    label: "Unha de Gel",
  },
  {
    id: "4",
    label: "Unha Fibra",
  },
  {
    id: "5",
    label: "Unha Fibra",
  },
  {
    id: "6",
    label: "Unha Fibra",
  },
];

export function NewAppointment() {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<AuthParamList, auth>>();

  const onDateSelected = (date) => {
    console.log("Selected Date:==>", date);
    // console.log('Selected Date:==>', moment(date).format('MMMM Do YYYY, h:mm:ss a'));
  };

  const onTimeSelected = (time) => {
    console.log("Selected time:==>", time);
  };

  return (
    <Container>
      <Content marginTopNumber={0}>
        <Grid>
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
            <IconButton disabled={true}></IconButton>
          </Header>

          <SelectContent>
            <Title>Serviço Selecionado :</Title>
            <SelectServiceModal data={DATA} />
          </SelectContent>
          <SelectContent style={{ marginTop: RFValue(30) }}>
            <Title>Selecione o Dia</Title>
            {/* @ts-ignore */}
            <DatePicker
              pickerType={"datetime"}
              minDate={new Date()}
              defaultSelected={new Date()}
              isShowYear={false}
              dayFormat={"DD"}
              monthFormat={"MMM"}
              yearFormat={"YY"}
              timeFormat={"HH:mm a"}
              timeStep={120}
              returnDateFormat={"DD/MM/YYYY"}
              onDateSelected={onDateSelected}
              onTimeSelected={onTimeSelected}
              //Style
              timePickerContainerStyle={styles.timeContainer}
              datePickerContainerStyle={styles.dateContainer}
              unSelectedTextStyle={styles.DateUnselected}
              selectedTextStyle={styles.DateSelected}
            />
          </SelectContent>

          <TotalValueContent>
            <Title style={{ marginRight: RFValue(10) }}>Valor Total: </Title>
            <TotalValue>110,90</TotalValue>
          </TotalValueContent>
          <Button fontSize={18} label="Agendar horário" />
        </Grid>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  dateContainer: {
    backgroundColor: theme.text.color.tertiary,
    marginTop: 20,
  },
  timeContainer: {
    backgroundColor: theme.colors.secondary,
  },
  DateUnselected: {
    color: theme.text.color.primary,
    fontFamily: theme.text.montserrat.bold,
  },
  DateSelected: {
    backgroundColor: theme.colors.secondary,
    textAlign: "center",
    width: 45,
    height: 30,
    color: theme.text.color.tertiary,
    fontFamily: theme.text.montserrat.bold,
    paddingTop: 7,
  },
});
