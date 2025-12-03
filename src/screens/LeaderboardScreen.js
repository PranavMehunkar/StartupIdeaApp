import { useIdeaStore } from "../store/ideaStore";
import { View, Text } from "react-native";

export default function LeaderboardScreen() {
  const ideas = useIdeaStore(state => state.ideas);

  const top5 = [...ideas]
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 5);

  return (
    <View style={{ padding: 20 }}>
      {top5.map((idea, index) => (
        <View
          key={idea.id}
          style={{
            padding: 15,
            marginVertical: 10,
            borderRadius: 10,
            backgroundColor: index === 0 ? "#ffeaa7" :
                             index === 1 ? "#dfe6e9" :
                             index === 2 ? "#fab1a0"   : "#f1f2f6",
          }}
        >
          <Text style={{ fontSize: 20 }}>
            {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : "🎖️"} {idea.name}
          </Text>
          <Text>Votes: {idea.votes}</Text>
          <Text>Rating: {idea.rating}</Text>
        </View>
      ))}
    </View>
  );
}
