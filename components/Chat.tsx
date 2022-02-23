import React, { useState, useEffect } from "react";
import {
  FlatList,
  TextInput,
  View,
  Button,
  ListRenderItem,
  ImageBackground,
  Image
} from "react-native";
import Styles from "./Styles";
import { RenderChatItem, ChatItem } from "./ChatItem";

interface ChatProps {
  username: string;
  image: string;
}

const Chat = ({ username, image }: ChatProps) => {
  let [chatInput, setChatInput] = useState("");
  let [chatItemList, setChatItemList] = useState<ChatItem[]>([]);

  const renderItem: ListRenderItem<ChatItem> = ({ item }) => (
    <RenderChatItem chatItem={item} username={username}></RenderChatItem>
  );

  return (
    <ImageBackground source={require("../assets/bg-chat.jpg")} resizeMode="cover" style={Styles.image}>
    <View style={Styles.chatContainer}>
      
      <FlatList
        inverted
        data={chatItemList.sort((a, b) => b.timeStamp - a.timeStamp)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>

      <View style={Styles.sendSection}>
        <TextInput
          style={Styles.chatTextInput}
          value={chatInput}
          onChangeText={(text) => setChatInput(text)}
        ></TextInput>
        <Button
          title="Send"
          onPress={async () => {
            setChatItemList([ ...chatItemList, {
              id: Math.random().toString(36).substring(7),
              text: chatInput,
              image: image,
              timeStamp: Date.now(),
              by: username,
            }]);
            setChatInput("");
          }}
        ></Button>
      </View>
    </View>
    </ImageBackground>
  );
};

export default Chat;
