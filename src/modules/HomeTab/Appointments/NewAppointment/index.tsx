import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Icon } from "react-native-elements";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList, auth } from '@routes/routesPath';
import { Container, Header, BackArrow, HeaderTitle, Title, ServiceSelect } from './styles';
import { DatePicker } from '@components/DatePicker';

export function NewAppointment() {

    const { navigate, goBack } = useNavigation<StackNavigationProp<AuthParamList, auth>>();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
    return (
        <Container>
            <Header>
                <BackArrow onPress={() => goBack()}
                >
                    <Icon name={"arrow-left"} type="octicon" color={'#6e6e6e'} />
                </BackArrow>
                <HeaderTitle>Agendar Horário</HeaderTitle>
            </Header>
            <Title>Serviço Selecionado : </Title>
            <ServiceSelect
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
            <Title>Selecione o Dia </Title>
            <DatePicker />
        </Container>

    );
};