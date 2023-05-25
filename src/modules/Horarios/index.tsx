import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList, auth } from '@routes/routesPath';
import { Name, Titulo, Texto, Containers, Data, Btn1, Btn2, BtnText } from './styles';
import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

export function Horarios() {

    const { navigate } = useNavigation<StackNavigationProp<AuthParamList, auth>>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24}}>

        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, paddingLeft:25, paddingTop: 6, width:355, height:200, zIndex: 9999, backgroundColor: '#f2f2f2'}}>
        <Entypo name="menu" size={24} style={{ paddingTop: 20}} color="#523200" />
        <Titulo style={{textAlign:'center', color: '#523200', fontSize: 22}}>Seus Horários</Titulo>
        <Titulo style={{paddingTop:30}}>Bom Dia, <Name>Maga</Name></Titulo>
        </View>
        <ScrollView horizontal={false} style={{ flex: 1 }}
        contentContainerStyle={{ paddingVertical: 200 }}  >
            
           <View style={{flexDirection: 'column'}}>
           <Containers>
                <Texto>Maquiagem e unhas</Texto>
                <Data> <Feather name="calendar" size={18} color="#4F4F4F" />   Hoje, 13:30</Data>
                <View style={{flexDirection: 'row'}}>
                    <Btn1><BtnText>Cancelar</BtnText></Btn1>
                    <Btn2><BtnText>Remarcar</BtnText></Btn2>
                </View>
            </Containers>

            <Containers>
                <Texto>Maquiagem e unhas</Texto>
                <Data> <Feather name="calendar" size={18} color="#4F4F4F" />   Hoje, 14:35</Data>
                <View style={{flexDirection: 'row'}}>
                    <Btn1><BtnText>Cancelar</BtnText></Btn1>
                    <Btn2><BtnText>Remarcar</BtnText></Btn2>
                </View>
            </Containers>

            <Containers>
                <Texto>Francesinha</Texto>
                <Data> <Feather name="calendar" size={18} color="#4F4F4F" />   Amanhã, 11:00</Data>
                <View style={{flexDirection: 'row'}}>
                    <Btn1><BtnText>Cancelar</BtnText></Btn1>
                    <Btn2><BtnText>Remarcar</BtnText></Btn2>
                </View>
            </Containers>

            <Containers>
                <Texto>Fibra de Vidro</Texto>
                <Data> <Feather name="calendar" size={18} color="#4F4F4F" />   Amanhã, 16:00</Data>
                <View style={{flexDirection: 'row'}}>
                    <Btn1><BtnText>Cancelar</BtnText></Btn1>
                    <Btn2><BtnText>Remarcar</BtnText></Btn2>
                </View>
            </Containers>
           </View>
           </ScrollView>

        </View>
    );
};