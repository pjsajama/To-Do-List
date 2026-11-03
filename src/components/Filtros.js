import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Filtros({ busqueda, setBusqueda, filtroEstado, setFiltroEstado }) {
  return (
    <View style={styles.contenedor}>
      <TextInput
        style={styles.inputBusqueda}
        placeholder="Buscar tarea..."
        value={busqueda}
        onChangeText={setBusqueda}
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={filtroEstado}
          onValueChange={(itemValue) => setFiltroEstado(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Todas" value="Todas" />
          <Picker.Item label="Pendientes" value="Pendientes" />
          <Picker.Item label="Completadas" value="Completadas" />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    marginBottom: 15,
  },
  inputBusqueda: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
});