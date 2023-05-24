import React from "react";
import { FlatList } from "react-native";
import { Container, Content, Icon, Description, Label, Price } from "./styles";

interface IPriceListObjects {
    icon: string;
    label: string;
    price: number
}
interface IPriceListProps {
    priceListData: IPriceListObjects[],
}

export const PriceList: React.FC<IPriceListProps> = ({ priceListData, ...rest }) => {

    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <Container {...rest}>
            <FlatList
                data={priceListData}
                renderItem={({ item }) => {
                    return (
                        <>
                            <Content>
                                <Icon source={item.icon} />
                                <Description>
                                    <Label>{item.label}</Label>
                                    <Price>{currencyFormat(item.price)}</Price>
                                </Description>
                            </Content>
                        </>
                    )
                }
                }
            />
        </Container>
    )
}