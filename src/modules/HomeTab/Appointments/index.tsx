import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList, auth } from "@routes/routesPath";

export function Appointments() {
  const { navigate } =
    useNavigation<StackNavigationProp<AuthParamList, auth>>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Appointments</Text>
    </View>
  );
}
