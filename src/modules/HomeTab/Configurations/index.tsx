
import { useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import { StyleSheet, Platform, Dimensions } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList, auth } from '@routes/routesPath';
import { Container, DatePicker, Header, HeaderTitle, IconButton, Label, Titulo } from './styles';
import CalendarRange from '@components/CalendarRange';
import { Icon } from "react-native-elements";
import moment from 'moment';
import { Button } from '@components/Button';
import SelectServiceModal from "@components/SelectServiceModal";
import theme from '@styles/theme';

export function Configurations() {

    const { navigate, goBack } = useNavigation<StackNavigationProp<AuthParamList, auth>>();
    const [startDay, setStartDay] = useState(new Date());
    const [endDay, setEndDay] = useState(new Date());
    const [markedDates, setMarkedDates] = useState({});

    const onDateSelected = date => {
        console.log('Selected Date:==>', date);
        // console.log('Selected Date:==>', moment(date).format('MMMM Do YYYY, h:mm:ss a'));
    }

    const onTimeSelected = (time) => {
        console.log("Selected time:==>", time);
    };


    const DATA = [
        {
            id: "1",
            label: "Disponível",
        },
        {
            id: "2",
            label: "Indisponível",
        },
        {
            id: "2",
            label: "Feriado",
        },
        {
            id: "2",
            label: "Ocupado",
        },
    ];


    return (
        <Container>
            <Header>
                <IconButton onPress={() => goBack()}>
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
            <CalendarRange
                markedDates={markedDates}
                onDayPress={day => {
                    if (startDay && !endDay) {
                        const date = {};
                        for (const d = moment(startDay); d.isSameOrBefore(day.dateString); d.add(1, 'days')) {
                            date[d.format('YYYY-MM-DD')] = {
                                color: '#7FBCAD',
                                textColor: 'white',
                            };
                            // @ts-ignore
                            if (d.format('YYYY-MM-DD') === startDay) date[d.format('YYYY-MM-DD')].startingDay = true;
                            if (d.format('YYYY-MM-DD') === day.dateString) date[d.format('YYYY-MM-DD')].endingDay = true;
                        }
                        setMarkedDates(date);
                        setEndDay(day.dateString);
                    } else {
                        setStartDay(day.dateString);
                        // @ts-ignore
                        setEndDay(null);
                        setMarkedDates({
                            [day.dateString]: {
                                color: '#7FBCAD',
                                textColor: 'white',
                                startingDay: true,
                                endingDay: true,
                            },
                        });
                    }
                }}
                items={[{ label: 'Refação de conceito', value: 'Refação de conceito' }]}
            />
            <Label>Período</Label>
            <DatePicker
                pickerType={"time"}
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
            <SelectServiceModal data={DATA} />
            <Button label={'Salvar'} fontSize={22} />
        </Container>
    );
};


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
        width: 80,
        height: 30,
        color: theme.text.color.tertiary,
        fontFamily: theme.text.montserrat.bold,
        paddingTop: 7,
    },
});