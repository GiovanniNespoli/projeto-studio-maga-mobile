import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Dimensions, Text } from "react-native";
import {
  Container,
  Banner,
  ServicesContent,
  Service,
  Title,
  ServiceImage,
  Description,
  BannerImage,
  BannerText,
  BannerTitle,
  Cupom,
  CupomText,
  Header,
  HeaderTitle,
  UserPhoto,
  Grid,
} from "./styles";
import { PriceList } from "@components/PriceList";
import { Image } from "react-native";
import { useImage } from "../../../hooks/image";

export function Home() {
  const { image } = useImage();

  return (
    <Container>
      <Grid>
        <Header>
          <HeaderTitle>Bem vindo Giovanni</HeaderTitle>

          <UserPhoto>
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: "100%", height: "100%", borderRadius: 100 }}
              />
            )}
          </UserPhoto>
        </Header>
        <Banner>
          <BannerImage source={require("@assets/banner.png")} />
          <BannerText>
            <BannerTitle>Descontos de até 30% em unhas</BannerTitle>
            <Cupom>
              <CupomText>Sabs30</CupomText>
            </Cupom>
          </BannerText>
        </Banner>
        <Title>Tabela de Preços</Title>
        <PriceList
          priceListData={[
            {
              label: "Unha simples",
              icon: require("@assets/priceIcons/nail1.png"),
              price: 50.0,
            },
            {
              label: "Francesinha",
              icon: require("@assets/priceIcons/nail2.png"),
              price: 75.0,
            },
            {
              label: "Unha de Gel",
              icon: require("@assets/priceIcons/nail3.png"),
              price: 180.0,
            },
            {
              label: "Unha Fibra",
              icon: require("@assets/priceIcons/nail4.png"),
              price: 200.0,
            },
          ]}
        />
        <Title>Nossos Serviços</Title>
        <ServicesContent>
          <Service>
            <ServiceImage source={require("@assets/servicesPics/nails.png")} />
            <Description>Unhas</Description>
          </Service>
          <Service>
            <ServiceImage source={require("@assets/servicesPics/makeup.png")} />
            <Description>Maquiagem</Description>
          </Service>
          <Service>
            <ServiceImage
              source={require("@assets/servicesPics/skinCare.png")}
            />
            <Description>Limpeza de pele</Description>
          </Service>
          <Service>
            <ServiceImage source={require("@assets/servicesPics/hair.png")} />
            <Description>Cabelo</Description>
          </Service>
        </ServicesContent>
      </Grid>
    </Container>
  );
}
