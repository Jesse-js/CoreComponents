import { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  Pressable,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
import Greet from "./components/Greet";
const logoImg = require("./assets/adaptive-icon.png");
const state = false;
export default function App() {
  const [isStatusBarHidden, setStatusBarHidden] = useState(false);
  const [isActivityIndicatorVisible, setActivityIndicatorVisible] =
    useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Greet name="John Doe" />
      <StatusBar
        backgroundColor="lightgreen"
        barStyle="light-content"
        hidden={isStatusBarHidden}
      />
      <ActivityIndicator />
      <ActivityIndicator
        size="large"
        color="white"
        animating={isActivityIndicatorVisible}
      />
      <ScrollView>
        <Text>
          <Text style={{ color: "white" }}> Hello</Text> World
        </Text>
        <Pressable onPress={() => console.log("Image pressed")}>
          <Image source={logoImg} style={{ width: 300, height: 300 }} />
        </Pressable>
        <Pressable onPress={() => console.log("Text pressed")}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ullamcorper accumsan dui a tempor. Morbi sed sem suscipit,
            sollicitudin enim euismod, suscipit libero. Sed rhoncus vel turpis
            non convallis. Ut euismod mi libero, sed tristique odio placerat in.
            Praesent efficitur fringilla tellus, nec vulputate odio convallis
            at. Etiam ante ipsum, mattis id elementum ac, tempus eu sapien.
            Proin consectetur elementum enim ut vulputate. Proin condimentum
            elementum urna sed pellentesque. Duis vestibulum massa vitae nisl
            gravida, sagittis hendrerit eros vestibulum. Quisque gravida metus
            sed cursus consequat. Donec feugiat vestibulum sapien, sit amet
            tincidunt est condimentum ac. Praesent velit mauris, varius non.
            Duis vestibulum massa vitae nisl gravida, sagittis hendrerit eros
            vestibulum. Quisque gravida metus sed cursus consequat. Donec
            feugiat vestibulum sapien, sit amet tincidunt est condimentum ac.
            Praesent velit mauris, varius non.
          </Text>
        </Pressable>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={{ width: 300, height: 300 }}
        />
      </ScrollView>
      <Button
        title="StatusBar"
        onPress={() => {
          setStatusBarHidden(!isStatusBarHidden);
          setActivityIndicatorVisible(!isActivityIndicatorVisible);
        }}
        color="midnightblue"
        disabled={state}
      />
      <Button
        title="Alert"
        onPress={() =>
          Alert.alert("Title", "Message", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ])
        }
      />
    </View>
  );
}
