import React from 'react';
import {Button, Text, View} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from "./Profile";
import Home from "./Home";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Home:"home",
    Profile:"person-sharp"
};
const tabBarIcon = (iconName) => ({size,color }) => (
     <Ionicons name={iconName} size={size} color={color} />

);
const ScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: tabBarIcon(iconName),


    };
};

function HomeTabs() {
    return (

        <Tab.Navigator initialRouteName="Home"
                       screenOptions={ScreenOptions}
                           tabBarOptions= {{
                           tabBarActiveTintColor: '#000',
                           tabBarInactiveTintColor: 'gray',

            }}
             >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default HomeTabs;
