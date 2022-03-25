import React, { useEffect, useState } from "react";

import { View, TouchableOpacity } from "react-native";
import styled from "styled-components";
import Text from "../Typography/Text";
import Spacer from "../Spacer/Spacer";
import AntDesign from "react-native-vector-icons/AntDesign";

const Field = styled.TextInput`
  height: 70px;
  width: 350px;
  margin: 12px;
  border-width: 1px;
  padding: 10px 10px 10px 60px;
  border-radius: 35px;
  border-color: #b1b6cb;
  font-size: 16px;
  font-weight: 700;
`;

function FieldInputs({
  email,
  password,
  setEmail,
  setPassword,
  checkNumber,
  checkLength,
  setCheckLength,
  setCheckNumber,
  setName,
  photo,
  name,
  setPhoto,
}) {
  // const [iconName, setIconName] = useState("eye");
  const [showPassword, setshowPassword] = useState(false);

  const [focused, setFocused] = useState(false);
  const condition = checkLength && checkNumber;
  useEffect(() => {
    if (focused) {
      if (password.length > 6 && /\d/.test(password)) {
        setCheckLength(true);
        setCheckNumber(true);
      } else {
        setCheckNumber(false);
        setCheckLength(false);
      }
      if (password.length > 6) {
        setCheckLength(true);
      }
      if (/\d/.test(password)) {
        setCheckNumber(true);
      }
    }
  }, [password]);
  return (
    <View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <AntDesign
          name="mail"
          size={24}
          color="#000"
          style={{ position: "absolute", top: 35, left: 30 }}
        />
        <Field
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#b1b6cb"
        />
      </View>
      {setName && (
        <View style={{ display: "flex", flexDirection: "row" }}>
          <AntDesign
            name="user"
            size={24}
            color="#000"
            style={{ position: "absolute", top: 35, left: 30 }}
          />
          <Field
            value={name}
            onChangeText={setName}
            placeholder="Name"
            placeholderTextColor="#b1b6cb"
          />
        </View>
      )}

      <View style={{ display: "flex", flexDirection: "row" }}>
        <AntDesign
          name="lock"
          size={30}
          color="#000"
          style={{ position: "absolute", top: 35, left: 30 }}
        />

        <Field
          value={password}
          onFocus={() => setFocused(true)}
          secureTextEntry={showPassword}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="#b1b6cb"
          style={
            condition === true
              ? { borderColor: "green" }
              : condition === false
              ? { borderColor: "red" }
              : { borderColor: "black" }
          }
        />
        <TouchableOpacity
          style={{
            width: 70,
            height: 30,
            position: "absolute",
            right: 10,
            top: 35,
          }}
          onPress={() => setshowPassword(!showPassword)}
        >
          <AntDesign
            name="eye"
            size={27}
            color="#000"
            style={{ position: "absolute", right: 25 }}
          />
        </TouchableOpacity>
      </View>
      <Spacer margin="1px" />
    </View>
  );
}

export default FieldInputs;
