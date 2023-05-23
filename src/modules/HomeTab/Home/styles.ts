import theme from "@styles/theme";
import { RFValue, } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex-direction: column;
  padding: ${RFValue(23)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(22)}px;
    font-family: ${theme.text.outfit.medium};
    color: ${theme.colors.text};
    margin: ${RFValue(7)}px;     
    align-self: flex-start;  
`;

export const Banner = styled.View`
  justify-content: flex-start;
  align-items:flex-end;
  flex-direction: row;
  flex-wrap: wrap;
  width: ${RFValue(320)}px;
  height: ${RFValue(278)}px;
  background: ${theme.banner.background};
  color: ${theme.text.color.tertiary};
  border-radius: ${RFValue(10)}px;
  margin: ${RFValue(20)}px;
`;

export const BannerImage = styled.Image`
  border-radius: ${RFValue(10)}px;
  position: absolute;
  left: 0;
`;

export const BannerTitle = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${theme.text.outfit.medium};
    color:${theme.text.color.tertiary};
    text-transform: uppercase;
    margin-bottom: ${RFValue(10)}px;
`;

export const BannerText = styled.View`
    left: ${RFValue(200)};
    top: ${RFValue(90)};
    width: ${RFValue(112)}px;
    height: ${RFValue(278)}px;
    justify-content: center;
`;

export const Cupom = styled.View`
  width: ${RFValue(100)}px;
  height: ${RFValue(50)}px;
  background-color: ${theme.colors.primary};
  padding-top:${RFValue(15)}px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(10)}px;
`;

export const CupomText = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${theme.text.outfit.medium};
    color:${theme.text.color.primary};
    text-transform: uppercase;
    margin-bottom: ${RFValue(10)}px;
`;

export const PricesContent = styled.View`
  justify-content: center;
  align-items:center;
  width: ${RFValue(320)}px;
  height: ${RFValue(362)}px;
  flex-direction: row;
  flex-wrap: wrap;
  background: ${theme.colors.tertiary};
`;

export const ServicesContent = styled.View`
  justify-content: center;
  align-items:center;
  width: ${RFValue(340)}px;
  height: ${RFValue(362)}px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Service = styled.View`
  justify-content: flex-start;
  align-items:flex-start;
  width: ${RFValue(156)}px;
  height: ${RFValue(115)}px;
  margin-bottom: ${RFValue(25)}px;
`;

export const ServiceImage = styled.Image`
  justify-content: center;
  align-items:center;
  width: ${RFValue(150)}px;
  height: ${RFValue(110)}px;
  background: ${theme.colors.secondary};
  padding-left: ${RFValue(10)}px;
  border-radius: ${RFValue(10)}px;
`;

export const Description = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${theme.text.outfit.medium};
    color: ${theme.colors.text};
    margin: ${RFValue(7)}px;     
    align-self: center;
`;
