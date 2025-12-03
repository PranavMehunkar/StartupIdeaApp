import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { TouchableOpacity,Text } from "react-native";
import SubmitIdeaScreen from "./src/screens/SubmitIdeaScreen";
import IdeaListScreen from "./src/screens/IdeaListScreen";
import LeaderboardScreen from "./src/screens/LeaderboardScreen";
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={dark ? DarkTheme : DefaultTheme}>
        <Stack.Navigator initialRouteName="Submit">
          <Stack.Screen
            name="Submit"
            options={({ navigation }) => ({
              title: "Submit Idea",
              headerRight: () => (
                <TouchableOpacity onPress={() => setDark(!dark)}>
                  <Text style={{ fontSize: 20, marginRight: 10 }}>
                    {dark ? "🌞" : "🌙"}
                  </Text>
                </TouchableOpacity>
              ),
            })}
            component={SubmitIdeaScreen}
          />
          <Stack.Screen name="IdeaList" component={IdeaListScreen} />
          <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </GestureHandlerRootView>
  );
}
