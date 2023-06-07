import theme from "@styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
// import RNDateTimePicker from '@react-native-community/datetimepicker';

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(59)}px;
    background-color:  ${theme.colors.input};  
    elevation: 4;
    shadow-offset:{  width: 0,  height: 2,  };
    shadow-color: #000000;
    shadow-opacity: 0.19;
    shadow-radius: 3.2px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-radius: ${RFValue(10)}px;
`;

// export const DatePickerContent = styled(RNDateTimePicker)`
//     font-family: ${theme.text.outfit.medium};
//     /* background-color: red; */
//     width: auto;
//     margin-left: ${RFValue(-20)}px;
// `;

