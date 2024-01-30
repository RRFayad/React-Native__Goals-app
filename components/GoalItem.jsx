import { StyleSheet, View, Text } from "react-native";

function GoalItem({ itemData }) {
  return (
    <View style={styles.goalItemContainer}>
      <Text style={styles.goalItemText}>{itemData.item}</Text>
    </View>
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
