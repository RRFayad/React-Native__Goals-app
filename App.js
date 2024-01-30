import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goalsList, setGoalsList] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setGoalsList((prevState) => [...prevState, enteredGoal]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Insert Goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItemContainer}>
                <Text style={styles.goalItemText}>{itemData.item}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItemContainer: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    color: "white",
  },
});
