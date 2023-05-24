import React, { useState } from "react";
import { Platform, TouchableOpacityProps } from "react-native";
import { Container, DatePickerContent } from "./styles";
import RNDateTimePicker, { DatePickerOptions } from '@react-native-community/datetimepicker';

interface IDatePickerProps extends DatePickerOptions {
    label: string;
    fontSize: number
}

export const DatePicker: React.FC<IDatePickerProps> = ({ label, fontSize, ...rest }) => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    var minTime = new Date();
    minTime.setHours(10);
    minTime.setMinutes(0);
    minTime.setMilliseconds(0);

    var maxTime = new Date();
    maxTime.setHours(22);
    maxTime.setMinutes(0);
    maxTime.setMilliseconds(0);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        console.log(currentDate)
      };

    return (
        <Container {...rest}>
            <DatePickerContent
                value={date}
                locale="pt-br"
                is24Hour={true}
                minimumDate={new Date(1950, 0, 1)}
                maximumDate={new Date(2030, 10, 20)}
                excludeDates={[new Date()]}
                onChange={onChange}
            />
            <DatePickerContent
                value={date}
                onChange={onChange}
                mode="time"
                minimumDate={minTime}
                maximumDate={maxTime}
            />
        </Container>
    )
}