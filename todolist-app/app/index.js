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
  const [filter, setFilter] = useState('all');

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

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <View style={[styles.container, darkMode && { backgroundColor: '#000' }]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={[styles.title, darkMode && { color: '#fff' }]}>To-Do List</Text>
          <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
            <Ionicons name={darkMode ? 'sunny' : 'moon'} size={24} color={darkMode ? '#ffa500' : '#333'} />
          </TouchableOpacity>
        </View>

        <View style={styles.filterButtonsContainer}>
          <TouchableOpacity
            style={[
              styles.filterButtonRow,
              filter === 'all' && styles.filterButtonActiveRow,
              darkMode && styles.filterButtonDarkRow,
              filter === 'all' && darkMode && styles.filterButtonActiveDarkRow,
            ]}
            onPress={() => setFilter('all')}
          >
            <Text
              style={[
                styles.filterButtonTextRow,
                filter === 'all' && styles.filterButtonTextActiveRow,
                darkMode && styles.filterButtonTextDarkRow,
                filter === 'all' && darkMode && styles.filterButtonTextActiveDarkRow,
              ]}
            >
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButtonRow,
              filter === 'completed' && styles.filterButtonActiveRow,
              darkMode && styles.filterButtonDarkRow,
              filter === 'completed' && darkMode && styles.filterButtonActiveDarkRow,
            ]}
            onPress={() => setFilter('completed')}
          >
            <Text
              style={[
                styles.filterButtonTextRow,
                filter === 'completed' && styles.filterButtonTextActiveRow,
                darkMode && styles.filterButtonTextDarkRow,
                filter === 'completed' && darkMode && styles.filterButtonTextActiveDarkRow,
              ]}
            >
              Completed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButtonRow,
              filter === 'pending' && styles.filterButtonActiveRow,
              darkMode && styles.filterButtonDarkRow,
              filter === 'pending' && darkMode && styles.filterButtonActiveDarkRow,
            ]}
            onPress={() => setFilter('pending')}
          >
            <Text
              style={[
                styles.filterButtonTextRow,
                filter === 'pending' && styles.filterButtonTextActiveRow,
                darkMode && styles.filterButtonTextDarkRow,
                filter === 'pending' && darkMode && styles.filterButtonTextActiveDarkRow,
              ]}
            >
              Pending
            </Text>
          </TouchableOpacity>
        </View>

        <TaskInput onAdd={handleAdd} />
        {filteredTasks.map((task) => (
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
  filterButtonsContainer: {
    flexDirection: 'row', // This makes the buttons align in a row
    justifyContent: 'space-around', // Adjust as needed: space-around, space-between, flex-start, flex-end, center
    marginBottom: 15,
  },
  filterButtonRow: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 15, // Add some horizontal padding
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  filterButtonActiveRow: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  filterButtonTextRow: {
    fontSize: 16,
    color: '#333',
  },
  filterButtonTextActiveRow: {
    color: '#fff',
  },
  // Dark mode styles for buttons in a row
  filterButtonDarkRow: {
    backgroundColor: '#333',
    borderColor: '#555',
  },
  filterButtonActiveDarkRow: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  filterButtonTextDarkRow: {
    color: '#eee',
  },
  filterButtonTextActiveDarkRow: {
    color: '#fff',
  },
});