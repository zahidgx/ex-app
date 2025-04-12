const API_URL = 'http://3.137.159.137';

export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) throw new Error('Credenciales incorrectas');
  return response.json();
};

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users/`);
  if (!response.ok) throw new Error('Error al obtener usuarios');
  return response.json();
};

export const register = async (name, lastName, email, password) => {
  const response = await fetch(`${API_URL}/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, last_name: lastName, email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Error al crear el usuario');
  }

  return data; // Devuelve los datos recibidos del backend
};

// api.js
export const fetchUser = async (userId) => {
  const response = await fetch(`http://3.137.159.137/users/${userId}`);
  if (!response.ok) {
    throw new Error('Error al obtener el usuario');
  }
  return await response.json();
};

export const fettchUser = async (userId) => {
  const response = await fetch(`${API_URL}/users/${userId}`);
  if (!response.ok) throw new Error('Error al obtener el usuario');
  return await response.json();
};


