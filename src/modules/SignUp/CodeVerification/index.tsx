import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList, auth } from "@routes/routesPath";
import theme from "@styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export function CodeValidation() {
  const { navigate } =
    useNavigation<StackNavigationProp<AuthParamList, auth>>();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Image
        style={{ width: 250, height: 80 }}
        source={require("@assets/logo.png")}
      />
      <Text
        style={{
          marginTop: RFValue(30),
          fontFamily: theme.text.montserrat.bold,
          fontSize: RFValue(16),
          color: "#666",
          width: 200,
          textAlign: "center",
        }}
      >
        Um código foi enviado no número fonecido
      </Text>
      <Text
        style={{
          marginTop: RFValue(10),
          fontFamily: theme.text.outfit.medium,
          fontSize: RFValue(14),
          color: "#979797",
          width: 200,
          textAlign: "center",
        }}
      >
        Para confirmar seu número insira-o abaixo
      </Text>
      <TextInput
        maxLength={4}
        keyboardType="number-pad"
        placeholder="Código"
        onSubmitEditing={() => navigate("hometab")}
        style={{
          width: RFValue(240),
          height: RFValue(80),
          backgroundColor: "#F3F3F3",
          borderRadius: 15,
          marginTop: RFValue(30),
          fontFamily: theme.text.outfit.medium,
          fontSize: 16,
          textAlign: "center",
          shadowColor: "black",
          shadowOffset: 0,
          shadow0pacity: 0.2,
          shadowRadius: 6,
          elevation: 5,
        }}
      ></TextInput>
    </View>
  );
}
