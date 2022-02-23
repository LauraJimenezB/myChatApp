import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Chat from './components/Chat';
import ProfileInfo from './components/ProfileInfo';
import Styles from './components/Styles';

export default function App() {
  const [username, setUserName] = useState("");
  const [image, setImage] = useState("");
  const storageUserNameKey = "chatapp-username";
  const storageImageKey = "chatapp-image";
  const [isLoading, setIsLoading] = useState(true);

  const fetchPersonalData = async () => {
    let fetchedUsername = await AsyncStorage.getItem(storageUserNameKey);
    let userName = fetchedUsername == null ? "" : fetchedUsername;
    let fetchedImage = await AsyncStorage.getItem(storageImageKey);
    let image = fetchedImage == null ? "" : fetchedImage;
    setUserName(userName);
    setImage(image);
  };

  if (isLoading) {
    return (
      <AppLoading
        startAsync={fetchPersonalData}
        onFinish={() => setIsLoading(false)}
        onError={() => console.log('error')}
      />
    );
  }
  
  const onPersonalInfoClosed = async (name: string, image: string) => {
    setUserName(name);
    await AsyncStorage.setItem(storageUserNameKey, name);
    setImage(image);
    await AsyncStorage.setItem(storageImageKey, image);
  };

  let activeComponent =
    username != "" ? (
      <Chat username={username} image={image} />
    ) : (
      <ProfileInfo onClosed={onPersonalInfoClosed} />
    );

  return (
    <SafeAreaView style={Styles.container}>
      {activeComponent}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
