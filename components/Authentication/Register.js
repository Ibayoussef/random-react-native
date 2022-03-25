import React, { useEffect, useState } from "react";
import Text from "../Typography/Text";
import Spacer from "../Spacer/Spacer";
import FieldInputs from "../Layout/FieldInputs";
import Button from "../Ui/Button";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
function Register(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [checkLength, setCheckLength] = useState(null);
  const [checkNumber, setCheckNumber] = useState(null);
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const [name, setName] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };
  const handleRegister = () => {
    const data = {
      name: name,
      email: email,
      password: password,
      photo: photo,
    };
    axios
      .post("http://192.168.0.159:8080/api/register", data)
      .then((res) => {
        alert("Register Succeeded");
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text primary bold>
          Welcome !
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
          setName={setName}
          name={name}
          checkLength={checkLength}
          setCheckNumber={setCheckNumber}
          setCheckLength={setCheckLength}
          checkNumber={checkNumber}
        />
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          <Image source={{ uri: photo }} style={{ width: 200, height: 200 }} />
        </View>
        <Text primary>Your Password must contain at least</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <AntDesign
            name="checkcircleo"
            size={20}
            color={checkLength ? "#3cb043" : "#000"}
          />
          <Text>6 charachters</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <AntDesign
            name="checkcircleo"
            size={20}
            color={checkNumber ? "#3cb043" : "#000"}
          />
          <Text>At least one number</Text>
        </View>
        <Spacer margin="5px" />
        <Button title="Sign up" onPress={handleRegister} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Register;
