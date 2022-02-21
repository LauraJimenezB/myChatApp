import React, { useState } from "react";
import { Button, Text, TextInput, View, Image, StyleSheet } from "react-native";
import Styles from "./Styles";
import ImageInput from "./ImageInput";

type ProfileInfoProps = {
  onClosed: (name: string, image: string) => void;
};

const ProfileInfo = ({ onClosed }: ProfileInfoProps) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  
  return (
    <View style={Styles.personalInfoContainer}>
        <Image
          source={require("../assets/speak.png")}
          style={Styles.logo}
        ></Image>
        <Text style={Styles.logoText}>CHAT ROOM</Text>

      <View style={Styles.enterYourName}>
        <Text style={Styles.nameText}>Please enter your name</Text>
        <TextInput
          style={Styles.nameTextInput}
          onChangeText={(text) => setName(text)}
          value={name}
        />
      </View>

      <ImageInput onChangeImage={(image) => setImage(image)} />
      <Button title="Let's start!" onPress={() => {}} />
    </View>
  );
};

export default ProfileInfo;
