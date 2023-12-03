import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
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
import { useAppointment } from "../../../../hooks/appointments";
import { useUser } from "../../../../hooks/user";

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
];

export function NewAppointment() {
  const { CreateAppointment } = useAppointment();
  const { userLogged } = useUser();

  const { navigate, goBack } =
    useNavigation<StackNavigationProp<AuthParamList, auth>>();
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const createAppointmentHandle = useCallback(async () => {
    const create = await CreateAppointment({
      date: `${date} ${converterHora12Para24(time)}`,
      service,
      value: "50",
      userId: userLogged.id,
    });

    if (create) {
      navigate("successappointment");
    }

    return;
  }, [service, date, time]);

  const onDateSelected = (date) => {
    setDate(date);
  };

  const onTimeSelected = (time) => {
    setTime(time);
  };

  function converterHora12Para24(hora12: string): string {
    // Use a expressão regular para extrair a hora, os minutos e o indicador AM/PM
    const match = hora12.match(/(\d+):(\d+)\s?([APMapm]{2})/);

    if (!match) {
      // Retorne a string original se não for possível extrair os componentes
      return hora12;
    }

    let horas = parseInt(match[1], 10);
    const minutos = match[2];
    const periodo = match[3].toUpperCase();

    // Converta para o formato de 24 horas
    if (periodo === "PM" && horas !== 12) {
      horas += 12;
    } else if (periodo === "AM" && horas === 12) {
      horas = 0;
    }

    // Formate as horas e os minutos para garantir dois dígitos
    const horasFormatadas = horas.toString().padStart(2, "0");

    // Retorne a hora no formato de 24 horas
    return `${horasFormatadas}:${minutos}`;
  }

  return (
    <Container>
      <Content marginTopNumber={0}>
        <Grid>
          <Header>
            <IconButton
              onPress={() => {
                navigate("hometab");
              }}
            >
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
            <SelectServiceModal
              selectedValue={(value) => {
                setService(value);
              }}
              data={DATA}
            />
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
            <TotalValue>50,00</TotalValue>
          </TotalValueContent>
          <Button
            onPress={() => {
              createAppointmentHandle();
            }}
            fontSize={18}
            label="Agendar horário"
          />
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
