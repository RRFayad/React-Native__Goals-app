import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ itemData, onDeleteGoal: deleteGoalHandler }) {
  return (
    <View style={styles.goalItemContainer}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={(event) => deleteGoalHandler(itemData.index)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{itemData.item}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItemText: {
    color: "white",
    padding: 8,
  },
});

export default GoalItem;
