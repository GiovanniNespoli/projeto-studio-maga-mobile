import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "../../modules/SignIn";
import { auth } from "../routesPath";
import { SignUp } from "@modules/SignUp";
import { HomeTab } from "@modules/HomeTab";
import { SuccessAppointment } from "@modules/SuccessAppointment";
import { SuccessSignUp } from "@modules/SuccessSignUp";
import { NewAppointment } from "@modules/HomeTab/Appointments/NewAppointment";
import { Appointments } from "@modules/HomeTab/Appointments";

const { Navigator, Screen } = createStackNavigator();

export default function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen component={SignIn} name={auth.signin} />
      <Screen component={HomeTab} name={auth.hometab} />
      <Screen component={Appointments} name={auth.appointemnts} />
      <Screen component={NewAppointment} name={auth.newappoitment} />
      <Screen component={SignUp} name={auth.signup} />
      <Screen component={SuccessSignUp} name={auth.successsignup} />
      <Screen component={SuccessAppointment} name={auth.successappointment} />
    </Navigator>
  );
}
