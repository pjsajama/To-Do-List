import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import AgregarTarea from './src/components/AgregarTarea';
import Filtros from './src/components/Filtros';
import ItemTarea from './src/components/ItemTarea';
import Contadores from './src/components/Contadores';

import { 
  agregarTarea, alternarEstadoTarea, eliminarTarea, 
  filtrarTareas, contarTareas, esCodigoSecreto 
} from './src/functions/logicaTareas';
import { guardarTareasStorage, cargarTareasStorage } from './src/storage/almacenamiento';

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [filtroEstado, setFiltroEstado] = useState('Todas');
  const [mostrarSecreto, setMostrarSecreto] = useState(false);

  useEffect(() => {
    const cargar = async () => {
      const tareasGuardadas = await cargarTareasStorage();
      setTareas(tareasGuardadas);
    };
    cargar();
  }, []);

  useEffect(() => {
    guardarTareasStorage(tareas);
  }, [tareas]);

  const manejarAgregar = (texto) => {
    if (esCodigoSecreto(texto)) {
      setMostrarSecreto(!mostrarSecreto); // Activa o desactiva la pantalla secreta
    } else {
      const nuevasTareas = agregarTarea(tareas, texto);
      setTareas(nuevasTareas);
    }
  };

  const tareasFiltradas = filtrarTareas(tareas, busqueda, filtroEstado);
  const { pendientes, completadas } = contarTareas(tareas);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mi To-Do List</Text>

      <AgregarTarea onAgregar={manejarAgregar} />

      {mostrarSecreto ? (
        <View style={styles.cajaSecreta}>
          <Text style={styles.textoSecreto}>¡Felicidades! Encontraste el área secreta.</Text>
          <Text style={styles.textoSecreto}>Proyecto de React Native y Expo.</Text>
          <Text style={styles.textoSecreto}>Desarrollador: [Tu Nombre Aquí]</Text>
        </View>
      ) : (
        <>
          <Filtros 
            busqueda={busqueda} 
            setBusqueda={setBusqueda} 
            filtroEstado={filtroEstado} 
            setFiltroEstado={setFiltroEstado} 
          />

          <ScrollView style={styles.lista}>
            {}
            {tareasFiltradas.map((tarea) => (
              <ItemTarea
                key={tarea.id}
                tarea={tarea}
                onAlternar={(id) => setTareas(alternarEstadoTarea(tareas, id))}
                onEliminar={(id) => setTareas(eliminarTarea(tareas, id))}
              />
            ))}
          </ScrollView>

          <Contadores pendientes={pendientes} completadas={completadas} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  lista: {
    flex: 1,
  },
  cajaSecreta: {
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  textoSecreto: {
    color: '#0f0',
    fontSize: 18,
    marginVertical: 5,
    fontWeight: 'bold',
  }
});