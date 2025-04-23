import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Keyboard } from 'react-native';

const TaskInput = ({ onAdd, darkMode }) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    if (!text.trim()) return;

    setLoading(true);
    try {
      await onAdd(text.trim());
      setText('');
      Keyboard.dismiss();
    } catch (error) {
      console.error("Error adding task:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[styles.container, darkMode && styles.containerDark]}>
      <TextInput
        placeholder="Add a task"
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleAdd}
        style={[styles.input, darkMode && styles.inputDark]}
        returnKeyType="done"
      />
      <Button
        title={loading ? '...' : 'Add'}
        onPress={handleAdd}
        disabled={!text.trim() || loading}
        color={darkMode ? '#FFA500' : '#007bff'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  containerDark: {
    backgroundColor: '#444',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
    marginRight: 8,
  },
  inputDark: {
    backgroundColor: '#444',
    color: '#fff',
  },
});

export default TaskInput;
