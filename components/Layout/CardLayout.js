import React from 'react';
import {View} from "react-native";
import Card from "../Ui/Card";
import Text from "../Typography/Text";
import styled from "styled-components";
import Spacer from "../Spacer/Spacer";

const Title = styled.Text`

`
function CardLayout(props) {
    return (
        <View style={{display: 'flex',
                     flexDirection: 'column', }}>
            <Card />
            <Text medium primary>Pancake</Text>
            <Spacer margin={1} />
            <Text>Food  > 60 min</Text>


        </View>
    );
}

export default CardLayout;
