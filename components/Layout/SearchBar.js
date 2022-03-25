import React from 'react';
import {View} from "react-native";
import styled from "styled-components";
import AntDesign from "react-native-vector-icons/AntDesign";

const Wrapper = styled.TextInput`
  
      width: 300px;
      height: 50px;
      background-color: #d5dbdb;
  border-radius: 30px;
  padding: 10px 10px 10px 70px;

`
function SearchBar(props) {
    return (
        <View style={{display:'flex',flexDirection: 'row',
                         justifyContent:'center',
                        alignItems:'center'}}>
            <AntDesign
            name='search1'
            color='#000'
            size={28}
            style={{position:'absolute',
            top:12,
                left: 70,
            zIndex:1}}
            />
        <Wrapper>

        </Wrapper></View>
    );
}

export default SearchBar;
