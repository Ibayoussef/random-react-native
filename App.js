import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Register from "./components/Authentication/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Authentication/Login";
import HomeTabs from "./components/Pages/HomeTabs";
import { AuthProvider, AuthContext } from "./context/AuthContext";
const Stack = createNativeStackNavigator();

function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Register />
    </View>
  );
}

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

function ScreenLayout() {
  const [authState] = useContext(AuthContext);
  return (
    <>
      {authState.token.length === 0 ? (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <HomeTabs />
        </NavigationContainer>
      )}
    </>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    poppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    poppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    poppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AuthProvider>
      <ScreenLayout />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
});
