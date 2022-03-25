import React from 'react';
import {View,FlatList} from "react-native";
import Card from "../Ui/Card";
import CardLayout from "../Layout/CardLayout";

function Grid(props) {
    return (
        <FlatList
            data={[{ name:1 }, { name: 2},
                { name:3 }, { name: 4},
                { name:5 }, { name: 6},
                { name:7 }, { name: 8},
                { name:9 }, { name: 10},
                { name:11 }, { name: 12},
                { name:13 }, { name: 14},
                { name:15 }, { name: 16},
                { name:17 }, { name: 18},
                { name:19 }, { name: 20}]}
            renderItem={() => <CardLayout />}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{marginBottom: 66}}
            numColumns={2}
/>

    );
}

export default Grid;
