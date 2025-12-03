import { useEffect, useState } from "react";
import { View, Text, Button, ScrollView, TouchableOpacity, Share } from "react-native";
import { useIdeaStore } from "../store/ideaStore";
import Toast from "react-native-toast-message";
import * as Haptics from "expo-haptics";
import { Swipeable } from "react-native-gesture-handler";

export default function IdeaListScreen({ navigation }) {
  const { ideas, loadIdeas, upvote } = useIdeaStore();
  const [sortType, setSortType] = useState("rating");
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    loadIdeas();
  }, []);

  const sortedIdeas = [...ideas].sort((a, b) =>
    sortType === "rating" ? b.rating - a.rating : b.votes - a.votes
  );

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const shareIdea = async (idea) => {
    await Share.share({
      message: `${idea.name} — ${idea.tagline}\n\n${idea.desc}\n\nRating: ${idea.rating}`,
    });
  };

  const leftSwipeActions = (idea) => (
    <TouchableOpacity
      onPress={() => shareIdea(idea)}
      style={{ backgroundColor: "lightblue", justifyContent: "center", padding: 20 }}
    >
      <Text>Share</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={{ padding: 20 }}>
      <Button
        title="Go to Leaderboard"
        onPress={() => navigation.navigate("Leaderboard")}
      />

      <Button title="Sort by Rating" onPress={() => setSortType("rating")} />
      <Button title="Sort by Votes" onPress={() => setSortType("votes")} />

      {sortedIdeas.map((idea) => (
        <Swipeable key={idea.id} renderLeftActions={() => leftSwipeActions(idea)}>
          <View
            style={{
              padding: 15,
              marginVertical: 10,
              borderWidth: 1,
              borderRadius: 8,
              backgroundColor: "#f9f9f9",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{idea.name}</Text>
            <Text>{idea.tagline}</Text>
            <Text>Rating: {idea.rating}/100</Text>
            <Text>Votes: {idea.votes}</Text>

            <Text style={{ marginTop: 5 }}>
              {expandedId === idea.id
                ? idea.desc
                : idea.desc.slice(0, 80) + " ..."}
            </Text>

            <TouchableOpacity onPress={() => toggleExpand(idea.id)}>
              <Text style={{ color: "blue", marginTop: 5 }}>
                {expandedId === idea.id ? "Read Less" : "Read More"}
              </Text>
            </TouchableOpacity>

            <Button
              title="Upvote"
              onPress={() => {
                upvote(idea.id);
                Haptics.selectionAsync();
                Toast.show({ type: "success", text1: "Upvoted!" });
              }}
            />
          </View>
        </Swipeable>
      ))}
    </ScrollView>
  );
}
