import React from 'react';
import {View} from "react-native";
import styled from "styled-components";

const Wrapper = styled.View`
        width:100%;
        height: ${props=>props.height};
        background-color: #d5dbdb;
        margin:10px 0 10px 0;
`
function GreyBar({height}) {
    return (
        <Wrapper height={height}>

        </Wrapper>
    );
}

export default GreyBar;
