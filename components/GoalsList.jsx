import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./GoalItem";

function GoalsList({ goalsList }) {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goalsList}
        renderItem={(itemData) => <GoalItem itemData={itemData} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

export default GoalsList;

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 6,
    marginTop: 8,
  },
});
