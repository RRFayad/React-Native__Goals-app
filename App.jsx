import { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalInput from "./components/GoalInput";
import GoalsList from "./components/GoalsList";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const toggleModalVisibilityHandler = () => {
    setModalIsVisible((prevState) => !prevState);
  };

  const addGoalHandler = (enteredGoal) => {
    setGoalsList((prevState) => [...prevState, enteredGoal]);
    toggleModalVisibilityHandler();
  };

  const deleteGoalHandler = (index) => {
    setGoalsList((prevState) =>
      prevState.filter((goal, goalIndex) => goalIndex !== index)
    );
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={toggleModalVisibilityHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          modalIsVisible={modalIsVisible}
          onCancel={toggleModalVisibilityHandler}
        />
        <GoalsList goalsList={goalsList} onDeleteGoal={deleteGoalHandler} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 16,
  },
});
