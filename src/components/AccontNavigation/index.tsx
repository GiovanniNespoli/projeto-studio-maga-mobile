import theme from "@styles/theme";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from "@components/Button";
import { NavigationContent, NavigationText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList, auth } from "@routes/routesPath";

interface IAccontNavigationProps {
    navigation: string;
}

export const AccontNavigation: React.FC<IAccontNavigationProps> = ({ navigation }) => {
    const { navigate } = useNavigation<StackNavigationProp<AuthParamList, auth>>();

    return (
        <NavigationContent>
            <NavigationText>Não possui uma conta ?</NavigationText>
            <Button
                style={{
                    width: "70%",
                    height: RFValue(39),
                    backgroundColor: theme.colors.tertiary,
                }}
                label='Cadastre-se'
                fontSize={16}
                //@ts-ignore
                onPress={() => { navigate(navigation) }}
            />
        </NavigationContent>
    )
}