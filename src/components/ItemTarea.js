import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ItemTarea({ tarea, onAlternar, onEliminar }) {
  return (
    <View style={styles.contenedor}>
      <TouchableOpacity style={styles.tareaInfo} onPress={() => onAlternar(tarea.id)}>
        {}
        <Text style={[styles.texto, tarea.completada ? styles.textoCompletado : null]}>
          {tarea.completada ? '✓ ' : 'O '} {tarea.texto}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botonEliminar} onPress={() => onEliminar(tarea.id)}>
        <Text style={styles.textoEliminar}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tareaInfo: {
    flex: 1,
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
  textoCompletado: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  botonEliminar: {
    backgroundColor: '#dc3545',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
  },
  textoEliminar: {
    color: '#fff',
    fontWeight: 'bold',
  },
});