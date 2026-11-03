import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Contadores({ pendientes, completadas }) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Pendientes: {pendientes}</Text>
      <Text style={styles.texto}>Completadas: {completadas}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
    marginTop: 10,
  },
  texto: {
    fontWeight: 'bold',
    color: '#555',
  },
});