import theme from "@styles/theme";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from "@components/Button";
import { NavigationContent, NavigationText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList, auth } from "@routes/routesPath";

interface IAccontNavigationProps {
  buttonText: string;
  subTitleText: string;
  navigation: string;
}

export const AccontNavigation: React.FC<IAccontNavigationProps> = ({
  navigation,
  buttonText,
  subTitleText,
}) => {
  const { navigate } =
    useNavigation<StackNavigationProp<AuthParamList, auth>>();

  return (
    <NavigationContent>
      <NavigationText>{subTitleText}</NavigationText>
      <Button
        style={{
          width: "70%",
          height: RFValue(39),
          backgroundColor: theme.colors.tertiary,
        }}
        label={buttonText}
        fontSize={16}
        onPress={() => {
          //@ts-ignore
          navigate(navigation);
        }}
      />
    </NavigationContent>
  );
};
