import AsyncStorage from '@react-native-async-storage/async-storage';

// Guardar el array de tareas convirtiéndolo a texto (JSON)
export const guardarTareasStorage = async (tareas) => {
  try {
    const jsonValue = JSON.stringify(tareas);
    await AsyncStorage.setItem('@tareas', jsonValue);
  } catch (e) {
    console.log("Error al guardar tareas:", e);
  }
};

// Cargar las tareas y convertirlas de texto a un array de objetos
export const cargarTareasStorage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@tareas');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.log("Error al cargar tareas:", e);
    return [];
  }
};