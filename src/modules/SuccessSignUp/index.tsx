import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList, auth } from '@routes/routesPath';
import { color } from 'react-native-reanimated';
import { Button1, ButtonText, Check, Footer, Text1, Text2 } from './styles';



export function SuccessSignUp() {

    const { navigate } = useNavigation<StackNavigationProp<AuthParamList>>();

    return (
        <><View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Check source={require("../../assets/check.png")}></Check>

            <Text1>Conta Criada com sucesso, </Text1>
            <Text2>Vamos começar?</Text2>

            <Button1 onPress={() => navigate('signin')}>
            <ButtonText>Voltar</ButtonText>
            </Button1>


        </View>

        <View style={{alignItems: 'center', justifyContent: 'center' }}>
                <Footer source={require("../../assets/logofooter.png")}></Footer>
        </View></>

    );
};
