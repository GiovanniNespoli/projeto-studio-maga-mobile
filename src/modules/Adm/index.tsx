import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList, auth } from "@routes/routesPath";
import {
  Titulo,
  Texto,
  Container,
  Containers,
  Data,
  Btn1,
  BtnText,
  NothingText,
} from "./styles";
import { Feather } from "@expo/vector-icons";
import "moment/locale/pt-br";
import { useAppointment } from "../../hooks/appointments";
import { useUser } from "../../hooks/user";
import IAppointment from "@src/interfaces/IAppointment";

export default function Adm() {
  const { navigate } =
    useNavigation<StackNavigationProp<AuthParamList, auth>>();

  const { GetAppointment, DeleteAppointment } = useAppointment();
  const { userLogged } = useUser();

  const [items, setItems] = useState<IAppointment[]>({} as IAppointment[]);

  GetAppointment().then((promise) => {
    setItems(promise);
  });

  return (
    <>
      <Container
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Titulo style={{ paddingTop: 30 }}>Todos os horários marcados</Titulo>

        <View style={{ flexDirection: "column" }}>
          {items.length ? (
            items.map((item, index) => {
              return (
                <Containers key={item.id}>
                  <Texto>{item.service}</Texto>
                  <Data>
                    {" "}
                    <Feather name="calendar" size={18} color="#4F4F4F" />{" "}
                    {item.date}
                  </Data>
                  <View style={{ flexDirection: "row" }}>
                    <Btn1
                      onPress={async () => {
                        await DeleteAppointment(item.id);
                      }}
                    >
                      <BtnText>Cancelar</BtnText>
                    </Btn1>
                  </View>
                </Containers>
              );
            })
          ) : (
            <NothingText>Nenhum horário cadastrado</NothingText>
          )}
        </View>
      </Container>
    </>
  );
}
