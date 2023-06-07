import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Dimensions } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList, auth } from '@routes/routesPath';
import { Name, Titulo, Texto, Container, Containers, Data, Btn1, Btn2, BtnText, DatePicker } from './styles';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import theme from '@styles/theme';
import moment from 'moment';
import 'moment/locale/pt-br';

export function Appointments() {

    const { navigate } = useNavigation<StackNavigationProp<AuthParamList, auth>>();

    const onDateSelected = date => {
        console.log('Selected Date:==>', date);
        // console.log('Selected Date:==>', moment(date).format('MMMM Do YYYY, h:mm:ss a'));
    }

    return (
        <>
            <Container
                contentContainerStyle={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Titulo style={{ paddingTop: 30 }}>Horários Marcados</Titulo>
                {/* <Titulo style={{ paddingTop: 30 }}>Horários <Name>Maga</Name></Titulo> */}
                {/* @ts-ignore */}
                <DatePicker
                    pickerType={'date'}
                    minDate={new Date()}
                    defaultSelected={new Date()}
                    isShowYear={false}
                    dayFormat={'DD'}
                    monthFormat={('MMM')}
                    yearFormat={'YY'}
                    timeFormat={'HH:mm a'}
                    timeStep={120}
                    returnDateFormat={'DD/MM/YYYY'}
                    onDateSelected={onDateSelected}
                    //Style
                    datePickerContainerStyle={styles.dateContainer}
                    unSelectedTextStyle={styles.DateUnselected}
                    selectedTextStyle={styles.DateSelected}
                />
                <View style={{ flexDirection: 'column' }}>
                    <Containers>
                        <Texto>Maquiagem e unhas</Texto>
                        <Data> <Feather name="calendar" size={18} color="#4F4F4F" />   Hoje, 13:30</Data>
                        <View style={{ flexDirection: 'row' }}>
                            <Btn1><BtnText>Cancelar</BtnText></Btn1>
                            <Btn2><BtnText>Remarcar</BtnText></Btn2>
                        </View>
                    </Containers>

                    <Containers>
                        <Texto>Maquiagem e unhas</Texto>
                        <Data> <Feather name="calendar" size={18} color="#4F4F4F" />   Hoje, 14:35</Data>
                        {/* <Data> <Feather name="user" size={18} color="#4F4F4F" />Adriana Macedo</Data>
                        <Data> <Feather name="phone" size={18} color="#4F4F4F" />(11) 97734-7334</Data> */}
                        <View style={{ flexDirection: 'row' }}>
                            <Btn1><BtnText>Cancelar</BtnText></Btn1>
                            <Btn2><BtnText>Remarcar</BtnText></Btn2>
                        </View>
                    </Containers>

                    <Containers>
                        <Texto>Francesinha</Texto>
                        <Data> <Feather name="calendar" size={18} color="#4F4F4F" />   Amanhã, 11:00</Data>
                        <View style={{ flexDirection: 'row' }}>
                            <Btn1><BtnText>Cancelar</BtnText></Btn1>
                            <Btn2><BtnText>Remarcar</BtnText></Btn2>  
                        </View>
                    </Containers>

                    <Containers>
                        <Texto>Fibra de Vidro</Texto>
                        <Data> <Feather name="calendar" size={18} color="#4F4F4F" />   Amanhã, 16:00</Data>
                        <View style={{ flexDirection: 'row' }}>
                            <Btn1><BtnText>Cancelar</BtnText></Btn1>
                            <Btn2><BtnText>Remarcar</BtnText></Btn2>
                        </View>
                    </Containers>
                    <Containers>
                        <Texto>Fibra de Vidro</Texto>
                        <Data> <Feather name="calendar" size={18} color="#4F4F4F" />   Amanhã, 16:00</Data>
                        <View style={{ flexDirection: 'row' }}>
                            <Btn1><BtnText>Cancelar</BtnText></Btn1>
                            <Btn2><BtnText>Remarcar</BtnText></Btn2>
                        </View>
                    </Containers>
                    <Containers>
                        <Texto>Fibra de Vidro</Texto>
                        <Data> <Feather name="calendar" size={18} color="#4F4F4F" />   Amanhã, 16:00</Data>
                        <View style={{ flexDirection: 'row' }}>
                            <Btn1><BtnText>Cancelar</BtnText></Btn1>
                            <Btn2><BtnText>Remarcar</BtnText></Btn2>
                        </View>
                    </Containers>
                    <Containers>
                        <Texto>Fibra de Vidro</Texto>
                        <Data> <Feather name="calendar" size={18} color="#4F4F4F" />   Amanhã, 16:00</Data>
                        <View style={{ flexDirection: 'row' }}>
                            <Btn1><BtnText>Cancelar</BtnText></Btn1>
                            <Btn2><BtnText>Remarcar</BtnText></Btn2>
                        </View>
                    </Containers>
                    <Containers>
                        <Texto>Fibra de Vidro</Texto>
                        <Data> <Feather name="calendar" size={18} color="#4F4F4F" />   Amanhã, 16:00</Data>
                        <View style={{ flexDirection: 'row' }}>
                            <Btn1><BtnText>Cancelar</BtnText></Btn1>
                            <Btn2><BtnText>Remarcar</BtnText></Btn2>
                        </View>
                    </Containers>
                    <Containers>
                        <Texto>Fibra de Vidro</Texto>
                        <Data> <Feather name="calendar" size={18} color="#4F4F4F" />   Amanhã, 16:00</Data>
                        <View style={{ flexDirection: 'row' }}>
                            <Btn1><BtnText>Cancelar</BtnText></Btn1>
                            <Btn2><BtnText>Remarcar</BtnText></Btn2>
                        </View>
                    </Containers>
                    <Containers>
                        <Texto>Fibra de Vidro</Texto>
                        <Data> <Feather name="calendar" size={18} color="#4F4F4F" />   Amanhã, 16:00</Data>
                        <View style={{ flexDirection: 'row' }}>
                            <Btn1><BtnText>Cancelar</BtnText></Btn1>
                            <Btn2><BtnText>Remarcar</BtnText></Btn2>
                        </View>
                    </Containers>
                    <Containers>
                        <Texto>Fibra de Vidro</Texto>
                        <Data> <Feather name="calendar" size={18} color="#4F4F4F" />   Amanhã, 16:00</Data>
                        <View style={{ flexDirection: 'row' }}>
                            <Btn1><BtnText>Cancelar</BtnText></Btn1>
                            <Btn2><BtnText>Remarcar</BtnText></Btn2>
                        </View>
                    </Containers>
                </View>
            </Container>
        </>
    );
};


const styles = StyleSheet.create({
    dateContainer: {
        width: Dimensions.get("screen").width - 20,
        marginBottom: 20,
        backgroundColor: theme.text.color.tertiary,
    },
    DateUnselected: {
        color: theme.text.color.primary,
        fontFamily: theme.text.montserrat.bold,
    },
    DateSelected: {
        backgroundColor: theme.colors.secondary,
        textAlign: 'center',
        width: 45,
        height: 30,
        color: theme.text.color.tertiary,
        fontFamily: theme.text.montserrat.regular,
        paddingTop: 7
    },
});