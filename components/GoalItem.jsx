import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ itemData, onDeleteGoal: deleteGoalHandler }) {
  return (
    <Pressable onPress={(event) => deleteGoalHandler(itemData.index)}>
      <View style={styles.goalItemContainer}>
        <Text style={styles.goalItemText}>{itemData.item}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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

export default GoalItem;
