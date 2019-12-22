import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './src/components/GoalItem';
import GoalInput from './src/components/GoalInput';

export default function App() {
  const [goals, addGoals] = useState([]);

  const [isAddGoal, setIsAddGoal] = useState(false);

  const handleAddGoal = (goal) => {
    if (goal) {
      addGoals(goals  => [...goals, { id: Math.random().toString(), value: goal }]);
      setIsAddGoal(false);
    }
  }

  const removeGoal = (goalId) => {
    if (goalId) {
      addGoals(goals  => goals.filter(g => g.id !== goalId));
    }
  }

  const handleCancelGoal = () => {
    setIsAddGoal(false);
  }

  return (
    <View style={styles.container}>
      <Button title='Add New Goal'
          onPress={() => setIsAddGoal(true)}
      />
      <GoalInput onAddGoal={handleAddGoal} visible={isAddGoal} onCancel={handleCancelGoal} />
      <FlatList
        keyExtractor={(item, i) => item.id}
        data={goals}
        renderItem={(itemData) => <GoalItem onDelete={() => removeGoal(itemData.item.id)} title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 30
  }
});
