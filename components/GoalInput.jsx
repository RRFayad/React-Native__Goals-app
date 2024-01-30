import { useState, useRef } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput({ onAddGoal }) {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    enteredGoal && onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Insert Goal"
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingLeft: 8,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 4,
  },
});

export default GoalInput;
