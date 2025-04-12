import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DatosScreen({ route }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles del Usuario</Text>
      <Text style={styles.label}>Nombre:</Text>
      <Text style={styles.value}>{user.name}</Text>

      <Text style={styles.label}>Apellido:</Text>
      <Text style={styles.value}>{user.last_name}</Text>

      <Text style={styles.label}>Correo:</Text>
      <Text style={styles.value}>{user.email}</Text>

      <Text style={styles.label}>ID:</Text>
      <Text style={styles.value}>{user.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e', // Fondo oscuro tipo cueva
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#e10000', // Rojo cereza brillante
    marginBottom: 20,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  label: {
    fontSize: 16,
    color: '#fff', // Texto blanco
    marginTop: 10,
    fontFamily: 'monospace',
  },
  value: {
    fontSize: 18,
    color: '#cccc94', // Color piedra para el valor
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
});
