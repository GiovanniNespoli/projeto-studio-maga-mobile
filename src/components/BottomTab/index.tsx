import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList, auth } from '@routes/routesPath';
import * as Animatable from "react-native-animatable";
import { Icon } from "react-native-elements";
import { Circle, Container, FocusContent, Content } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface ITabObject {
  route: string;
  label: string,
  icon: string,
  component: React.ComponentType,
}

interface IBottomTabProps {
  tabArr: ITabObject[],
}

export const BottomTab: React.FC<IBottomTabProps> = ({ tabArr, ...rest }) => {

  const { navigate } = useNavigation<StackNavigationProp<AuthParamList, auth>>();
  const Tab = createBottomTabNavigator();

  const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);

    useEffect(() => {

    }, [focused]);

    return (
      <>
        <Container
          onPress={onPress}
          activeOpacity={1}
        >
          <Content>
            <Animatable.View
              ref={viewRef}
              style={[
                StyleSheet.absoluteFillObject,
                { backgroundColor: "#daa296", borderRadius: 16 },
              ]}
            />
            <FocusContent
              style={[{ backgroundColor: focused ? null : '#FFFFFF' },]}
            >
              <Icon name={item.icon} type="octicon" color={focused ? '#FFFFFF' :'#6e6e6e'} />
            </FocusContent>
          </Content>
        </Container>
      </>
    );
  };

  const NewAppointemntScreen = () => {
    return null
  }

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60,
            position: "absolute",
            bottom: 16,
            right: 16,
            left: 16,
            borderRadius: 16,
            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.19,
            shadowRadius: 5.62,
            elevation: 6
          },
        }}
      >
        {tabArr.map((item, index) => {
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
        <Tab.Screen
          name="newAppointement"
          component={NewAppointemntScreen}
          options={() => ({
            tabBarButton: props => <Container
              onPress={() => navigate('signin')}
              // onPress={() => navigate('newappoitment')}
              activeOpacity={1}
            >
              <Circle>
                <Icon name="plus" type="octicon" color="#FFFFFF" />
              </Circle>
            </Container>
          })} />
      </Tab.Navigator>
    </>
  );
};

