import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { getUsers } from '../api/api';

export default function UsersScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#000" style={{ flex: 1 }} />;

  const handleDetails = (user) => {
    navigation.navigate('DatosScreen', { user }); // Navega a los detalles del usuario
  };

  const renderItem = ({ item }) => (
    <View style={styles.userCard}>
      <Text style={styles.userName}>{item.name} {item.last_name}</Text>
      <Text style={styles.userEmail}>{item.email}</Text> {/* Correo con estilo blanco */}
      <View style={styles.buttonsContainer}>
        <Button title="Detalles del usuario" onPress={() => handleDetails(item)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuarios</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1e1e1e',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    color: '#e10000', // Rojo cereza brillante
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    fontFamily: 'monospace',
  },
  userCard: {
    padding: 15,
    borderWidth: 3,
    borderColor: '#e10000', // Rojo cereza para el borde
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#333', // Fondo oscuro similar a Login
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#e10000', // Nombre con color rojo coqueto
    fontFamily: 'monospace',
  },
  userEmail: {
    fontSize: 16,
    color: '#fff', // Correo con color blanco
    fontFamily: 'monospace',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
});
