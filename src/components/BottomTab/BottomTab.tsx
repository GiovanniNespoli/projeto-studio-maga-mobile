// import React from "react";
// import { TouchableOpacityProps } from "react-native";
// import { Circle, Container } from "./styles";
// import { Icon } from "react-native-elements";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";

// library.add(faHouseChimney);
// // import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import { SignUp } from "@modules/SignUp";
// import { SignIn } from "@modules/SignIn";

// const Tab = createBottomTabNavigator();

// interface IBottomTabProps extends TouchableOpacityProps {
//   label: string;
//   fontSize: number;
// }

// export const BottomTab: React.FC<IBottomTabProps> = ({
//   label,
//   fontSize,
//   ...rest
// }) => {
//   return (
//     // <Container {...rest}>
//     <Tab.Navigator
//       screenOptions={{
//         tabBarShowLabel: false,
//         tabBarInactiveTintColor: "#494a4b",
//         tabBarActiveTintColor: "#ffffff",
//         tabBarActiveBackgroundColor: "#daa296",
//         tabBarVisibilityAnimationConfig:{

//         },
//         tabBarStyle: {
//           position: "absolute",
//           bottom: 25,
//           left: 20,
//           right: 20,
//           elevation: 6,
//           backgroundColor: "#ffffff",
//           borderRadius: 15,
//           height: 70,
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={SignIn}
//         options={{
//           tabBarLabel: "Profile",
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="home" type="octicon" color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Settings"
//         component={SignUp}
//         options={{
//           tabBarLabel: "oi",
//           tabBarIcon: ({ color, focused }) => (
//             <Icon name="calendar" type="octicon" color={color} />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="ha"
//         component={SignIn}
//         options={{
//           tabBarLabel: "Profile",
//           tabBarIcon: ({ color, size }) => (
//             <Circle>
//               <Icon name="plus" type="octicon" color="#FFFFFF" />
//             </Circle>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { Icon } from "react-native-elements";
import Icons from "../Icons/Icons";
import { SignIn } from "@modules/SignIn";
import { SignUp } from "@modules/SignUp";

const TabArr = [
  {
    route: "Home",
    label: "Home",
    icon : 'home',
    component: SignIn,
    color: "red",
    alphaClr: "green",
  },
  {
    route: "Search",
    label: "Search",
    icon : 'search',
    component: SignUp,
    color: "blue",
    alphaClr: "yellow",
  },
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);

  useEffect(() => {

  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, { flex: focused ? 1 : 0.65 }]}
    >
      <View>
        <Animatable.View
          ref={viewRef}
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: item.color, borderRadius: 16 },
          ]}
        />
        <View
          style={[
            styles.btn,
            { backgroundColor: focused ? null : item.alphaClr },
          ]}
        >
          <Icon name={item.icon} type="octicon" color="#FFFFFF" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const BottomTab: React.FC = ({ ...rest }) => {
  return (
    // <Container {...rest}>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: "absolute",
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
        },
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 16,
  },
});
