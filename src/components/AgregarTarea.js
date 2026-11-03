import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function AgregarTarea({ onAgregar }) {
  const [texto, setTexto] = useState('');

  const manejarEnvio = () => {
    onAgregar(texto);
    setTexto(''); // Limpiar el input después de enviar
  };

  return (
    <View style={styles.contenedor}>
      <TextInput
        style={styles.input}
        placeholder="Escribí una nueva tarea..."
        value={texto}
        onChangeText={setTexto}
      />
      <TouchableOpacity style={styles.boton} onPress={manejarEnvio}>
        <Text style={styles.textoBoton}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  boton: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 5,
    justifyContent: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});