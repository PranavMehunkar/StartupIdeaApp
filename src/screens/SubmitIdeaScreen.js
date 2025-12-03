import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useIdeaStore } from "../store/ideaStore";
import Toast from "react-native-toast-message";

export default function SubmitIdeaScreen({ navigation }) {
  const addIdea = useIdeaStore(state => state.addIdea);
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [desc, setDesc] = useState("");

  const onSubmit = () => {
    const rating = Math.floor(Math.random() * 100);

    const idea = {
      id: Date.now().toString(),
      name,
      tagline,
      desc,
      rating,
      votes: 0,
    };

    addIdea(idea);

    Toast.show({
      type: "success",
      text1: "Idea Added!",
      text2: "Your startup idea has been submitted 🚀",
    });

    navigation.navigate("IdeaList");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Startup Name</Text>
      <TextInput value={name} onChangeText={setName} style={{ borderWidth: 1 }} />

      <Text>Tagline</Text>
      <TextInput value={tagline} onChangeText={setTagline} style={{ borderWidth: 1 }} />

      <Text>Description</Text>
      <TextInput
        multiline
        value={desc}
        onChangeText={setDesc}
        style={{ borderWidth: 1, height: 100 }}
      />

      <Button title="Submit Idea" onPress={onSubmit} />
    </View>
  );
}
