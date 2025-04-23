const API_URL = 'https://backend-fastapi-obja.onrender.com';

export const fetchTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  return response.json();
};

export const createTask = async (text) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  return response.json();
};

export const toggleTask = async (id) => {
  const response = await fetch(`${API_URL}/tasks/${id}/toggle`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
};

export const deleteTask = async (id) => {
  await fetch(`${API_URL}/tasks/${id}`, { method: 'DELETE' });
};

export const updateTask = async (id, newText) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: newText, completed: false }),
  });
  return response.json();
};
