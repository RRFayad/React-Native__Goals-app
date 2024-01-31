import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import GoalsList from "./components/GoalsList";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    setGoalsList((prevState) => [...prevState, enteredGoal]);
  };

  const deleteGoalHandler = (index) => {
    setGoalsList((prevState) =>
      prevState.filter((goal, goalIndex) => goalIndex !== index)
    );
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <GoalsList goalsList={goalsList} onDeleteGoal={deleteGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
