export const agregarTarea = (tareas, texto) => {
  if (texto.trim() === '') return tareas; 

  const nuevaTarea = {
    id: Date.now().toString(),
    texto: texto,
    completada: false
  };
  return [...tareas, nuevaTarea];
};

export const alternarEstadoTarea = (tareas, id) => {
  return tareas.map(tarea => {
    if (tarea.id === id) {
      return { ...tarea, completada: !tarea.completada };
    }
    return tarea;
  });
};

export const eliminarTarea = (tareas, id) => {
  return tareas.filter(tarea => tarea.id !== id);
};

export const filtrarTareas = (tareas, busqueda, filtroEstado) => {
  return tareas.filter(tarea => {
    const coincideTexto = tarea.texto.toLowerCase().includes(busqueda.toLowerCase());

    let coincideEstado = true;
    if (filtroEstado === 'Pendientes') coincideEstado = !tarea.completada;
    if (filtroEstado === 'Completadas') coincideEstado = tarea.completada;

    return coincideTexto && coincideEstado;
  });
};

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

export const esCodigoSecreto = (texto) => {
  return texto.trim() === '123456';
};