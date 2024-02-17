import { View, Text, Image, ScrollView, Button } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");
const state = false;
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        <Text>
          <Text style={{ color: "white" }}> Hello</Text> World
        </Text>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ullamcorper accumsan dui a tempor. Morbi sed sem suscipit,
          sollicitudin enim euismod, suscipit libero. Sed rhoncus vel turpis non
          convallis. Ut euismod mi libero, sed tristique odio placerat in.
          Praesent efficitur fringilla tellus, nec vulputate odio convallis at.
          Etiam ante ipsum, mattis id elementum ac, tempus eu sapien. Proin
          consectetur elementum enim ut vulputate. Proin condimentum elementum
          urna sed pellentesque. Duis vestibulum massa vitae nisl gravida,
          sagittis hendrerit eros vestibulum. Quisque gravida metus sed cursus
          consequat. Donec feugiat vestibulum sapien, sit amet tincidunt est
          condimentum ac. Praesent velit mauris, varius non. Duis vestibulum
          massa vitae nisl gravida, sagittis hendrerit eros vestibulum. Quisque
          gravida metus sed cursus consequat. Donec feugiat vestibulum sapien,
          sit amet tincidunt est condimentum ac. Praesent velit mauris, varius
          non.
        </Text>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={{ width: 300, height: 300 }}
        />
      </ScrollView>
      <Button
        title="Press"
        onPress={() => console.log("Button pressed")}
        color="midnightblue"
        disabled={state}
      />
    </View>
  );
}
