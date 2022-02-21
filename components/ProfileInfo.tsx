import React, { useState } from "react";
import { Button, Text, TextInput, View, Image, StyleSheet } from "react-native";
// import Styles from "./Styles";
// import ImageChooser from "./ImageChooser";

type ProfileInfoProps = {
  onClosed: (name: string, image: string) => void;
};

const ProfileInfo = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  return (
    <View>
      <Image
        source={require("../assets/favicon.png")}
      ></Image>

      <View>
        <Text>Please enter your name</Text>
        <TextInput
          onChangeText={(text) => setName(text)}
          value={name}
        />
      </View>

      {/* <ImageChooser onChangeImage={(image) => setImage(image)} /> */}
      <Button title="Let's start!" onPress={() => {}} />
    </View>
  );
};

export default ProfileInfo;
