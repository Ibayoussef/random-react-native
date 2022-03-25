import React from 'react';
import {Button, View, ScrollView} from "react-native";
import SearchBar from "../Layout/SearchBar";
import Text from "../Typography/Text";
import TagsBar from "../Layout/TagsBar";
import Spacer from "../Spacer/Spacer";
import GreyBar from "../Ui/GreyBar";
import Swiper from 'react-native-swiper';
import Card from "../Ui/Card";
import Grid from "../FlatList/Grid";




function Home() {
    return (

     <View>
         <SearchBar />

         <Text primary bold> Category </Text>
         <Spacer margin='10'/>

         <View style={{display:'flex',
                      flexDirection:'row',
                      alignItems:'center',
                      height:60
         } }>
             <ScrollView horizontal
                         showsHorizontalScrollIndicator={false}>
                 <TagsBar size={60}>All</TagsBar>

             <TagsBar size={120}>Breakfast</TagsBar>

             <TagsBar size={80}>Lunch</TagsBar>
             <TagsBar size={80}>Dinner</TagsBar>
                 <TagsBar size={80}>Dessert</TagsBar>

             </ScrollView>

         </View>
         <GreyBar height={10}/>
         <Grid />
         <Spacer margin={200} />
     </View>
    );
}

export default Home;
