import React, { useContext } from "react";
import Text from "../Typography/Text";
import Spacer from "../Spacer/Spacer";
import FieldInputs from "../Layout/FieldInputs";
import Button from "../Ui/Button";
import { StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import styled from "styled-components";
import axios from "axios";
const ForgotPassword = styled.TouchableOpacity`
  font-size: 32px;
  width: 60%;
`;

const ForgotText = styled.Text`
  font-size: 17px;
  position: relative;
  left: 100px;
  font-weight: 600;
`;

function Login() {
  const navigation = useNavigation();
  const [authState, setAuthState] = useContext(AuthContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleLogin = () => {
    const data = {
      email: email,
      password: password,
    };
    axios
      .post("http://192.168.0.159:8080/api/login", data)
      .then(({ data }) => setAuthState({ token: data.Token }))
      .catch((err) => alert(err));
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text primary bold>
          Welcome Back!
        </Text>
        <Spacer margin="1px" />

        <Text secondary thin>
          Please enter your account here
        </Text>
        <Spacer margin="25px" />
        <FieldInputs
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
        <View>
          <ForgotPassword title="Forgot password?" color="#000">
            <ForgotText>Forgot password?</ForgotText>
          </ForgotPassword>
        </View>
        <Spacer margin="25px" />
        <Button title="Login" red onPress={handleLogin} />
        <Spacer margin="10px" />
        <Text secondary>Or continue with</Text>
        <Spacer margin="10px" />
        <View style={{ display: "flex", flexDirection: "row" }}>
          <AntDesign
            name="google"
            size={30}
            color="#FFF"
            style={{ position: "absolute", left: 100, top: 15, zIndex: 1 }}
          />
          <Button title="Google" />
        </View>

        <Spacer margin="20px" />
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text primary>Dont have any account ?</Text>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => navigation.navigate("Register")}
          >
            <Text signup>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
