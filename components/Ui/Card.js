import React from 'react';
import {View, Image,ImageBackground,StyleSheet} from "react-native";
import styled from "styled-components";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Text from "../Typography/Text";
import Spacer from "../Spacer/Spacer";


const Wrapper = styled.View`
    width: 170px;
    height: 170px;
    border-radius: 40px;
    margin: 10px;
`
const BackgroundPicture = styled.ImageBackground`
  flex: 1;
  justify-content : center;
  width: 170px;
  height: 170px;
  border-radius: 40px;
  overflow: hidden

`

const imageUrl ={ uri: "https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26231113/5783153.jpg"};

function Card() {
    return (
        <Wrapper>
             {/*imageUrl needs to be defined later with a "require"*/}
            <BackgroundPicture source={imageUrl}   >
                         <AntDesign name='heart'
                           size={24}
                           color='#FFF'
                           style={{position:'absolute',
                               right: 15,
                               top:26
                }       }/>
            </BackgroundPicture>
        </Wrapper>

    );
}


export default Card;
