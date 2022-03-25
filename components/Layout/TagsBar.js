import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import styled from "styled-components";

const Button = styled.TouchableOpacity`
    width: ${props=>props.size};
  height: 50px;
  border-radius: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 10px;
  background-color: palegreen;

  &:active {
        color: red;
        background-color: black;
  }`
const Tag =styled.Text`
    
    font-size: 16px;
    color: grey;


`
const TagsBar = ({children,size}) => {
    return (
        <Button size={size}>
          <Tag> {children}</Tag>
        </Button>
    );
}

export default TagsBar;
