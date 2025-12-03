import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useIdeaStore = create((set, get) => ({
  ideas: [],

  loadIdeas: async () => {
    const data = await AsyncStorage.getItem("ideas");
    if (data) set({ ideas: JSON.parse(data) });
  },

  addIdea: async (idea) => {
    const updated = [...get().ideas, idea];
    set({ ideas: updated });
    await AsyncStorage.setItem("ideas", JSON.stringify(updated));
  },

  upvote: async (id) => {
    const updated = get().ideas.map(i =>
      i.id === id ? { ...i, votes: i.votes + 1 } : i
    );
    set({ ideas: updated });
    await AsyncStorage.setItem("ideas", JSON.stringify(updated));
  }
}));
