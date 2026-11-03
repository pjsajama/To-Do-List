// Agrega una tarea si el texto no está vacío
export const agregarTarea = (tareas, texto) => {
  if (texto.trim() === '') return tareas; 

  const nuevaTarea = {
    id: Date.now().toString(), // Usamos la fecha exacta como ID único
    texto: texto,
    completada: false
  };
  return [...tareas, nuevaTarea];
};

// Cambia el estado de completada de una tarea específica
export const alternarEstadoTarea = (tareas, id) => {
  return tareas.map(tarea => {
    if (tarea.id === id) {
      return { ...tarea, completada: !tarea.completada };
    }
    return tarea;
  });
};

// Filtra el array dejando afuera la tarea con el id que queremos borrar
export const eliminarTarea = (tareas, id) => {
  return tareas.filter(tarea => tarea.id !== id);
};

// Aplica el texto de búsqueda y el filtro del Picker
export const filtrarTareas = (tareas, busqueda, filtroEstado) => {
  return tareas.filter(tarea => {
    // Filtro por texto
    const coincideTexto = tarea.texto.toLowerCase().includes(busqueda.toLowerCase());
    
    // Filtro por estado
    let coincideEstado = true;
    if (filtroEstado === 'Pendientes') coincideEstado = !tarea.completada;
    if (filtroEstado === 'Completadas') coincideEstado = tarea.completada;

    return coincideTexto && coincideEstado;
  });
};

// Calcula cuántas están listas y cuántas faltan
export const contarTareas = (tareas) => {
  let completadas = 0;
  let pendientes = 0;

  tareas.forEach(tarea => {
    if (tarea.completada) {
      completadas++;
    } else {
      pendientes++;
    }
  });

  return { completadas, pendientes };
};

// Detecta si se ingresó el código secreto
export const esCodigoSecreto = (texto) => {
  return texto.trim() === '123456';
};