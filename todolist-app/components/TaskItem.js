import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TaskItem = ({ task, onToggle, onDelete, onEdit, darkMode }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(editText.trim());
      setIsEditing(false);
    }
  };

  return (
    <Pressable style={[styles.item, darkMode && styles.itemDark]} onPress={onToggle}>
      {isEditing ? (
        <TextInput
          value={editText}
          onChangeText={setEditText}
          onSubmitEditing={handleSave}
          style={[styles.input, darkMode && styles.inputDark]}
        />
      ) : (
        <Text style={[styles.text, task.completed && styles.completed, darkMode && styles.textDark]}>
          {task.text}
        </Text>
      )}

      <View style={styles.icons}>
        {isEditing ? (
          <TouchableOpacity onPress={handleSave}>
            <Ionicons name="checkmark" size={20} color={darkMode ? '#4CAF50' : '#4CAF50'} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIsEditing(true)}>
            <Ionicons name="create-outline" size={20} color={darkMode ? '#007bff' : '#007bff'} />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={onDelete} style={{ marginLeft: 10 }}>
          <Ionicons name="trash-outline" size={20} color={darkMode ? '#e53935' : '#e53935'} />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemDark: {
    backgroundColor: '#333',
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  inputDark: {
    backgroundColor: '#444',
    color: '#fff',
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  textDark: {
    color: '#fff',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default TaskItem;
