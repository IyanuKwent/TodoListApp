import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import TaskInput from '../components/TaskInput';
import TaskItem from '../components/TaskItem';
import {
  fetchTasks,
  createTask,
  toggleTask,
  deleteTask,
  updateTask
} from '../services/api';
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(useColorScheme() === 'dark');

  useEffect(() => {
    fetchTasks()
      .then(setTasks)
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  const handleAdd = async (text) => {
    try {
      const newTask = await createTask(text);
      setTasks((prev) => [newTask, ...prev]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const handleToggle = async (id) => {
    try {
      const updated = await toggleTask(id);
      setTasks((prev) =>
        prev.map((t) => (t.id === id ? updated : t))
      );
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleEdit = async (id, newText) => {
    try {
      const updated = await updateTask(id, newText);
      setTasks((prev) =>
        prev.map((t) => (t.id === id ? updated : t))
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <View style={[styles.container, darkMode && { backgroundColor: '#000' }]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={[styles.title, darkMode && { color: '#fff' }]}>To-Do List</Text>
          <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
            <Ionicons name={darkMode ? 'sunny' : 'moon'} size={24} color={darkMode ? '#ffa500' : '#333'} />
          </TouchableOpacity>
        </View>
        <TaskInput onAdd={handleAdd} />
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={() => handleToggle(task.id)}
            onDelete={() => handleDelete(task.id)}
            onEdit={(newText) => handleEdit(task.id, newText)}
            darkMode={darkMode}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    paddingTop: 60,
  },
  scrollContainer: { 
    padding: 20, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: { fontSize: 24, fontWeight: 'bold' },
  themeToggle: {
    padding: 10,
    borderRadius: 50,
  },
});
