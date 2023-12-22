// Variables
let listaDeTareas = [];

// Funciones
function agregarTarea(nombre) {
  const nuevaTarea = {
    nombre: nombre,
    completada: false
  };
  listaDeTareas.push(nuevaTarea);
}

function crearBotonTarea(index) {
  const boton = document.createElement("button");
  boton.textContent = `${listaDeTareas[index].nombre} - ${listaDeTareas[index].completada ? 'Completada' : 'Pendiente'}`;
  boton.classList.add('botonTarea')
  boton.addEventListener("click", function() {
    toggleCompletada(index);
    actualizarInterfaz();
  });
  return boton;
}

function actualizarInterfaz() {
  const tareasContainer = document.getElementById("tareasContainer");
  tareasContainer.innerHTML = "";

  
  listaDeTareas.forEach((tarea, index) => {
    const tareaElemento = crearBotonTarea(index);
    tareasContainer.appendChild(tareaElemento);
  });
}

function agregarNuevaTarea() {
  const inputTarea = document.getElementById("nuevaTarea");
  const nuevaTareaNombre = inputTarea.value.trim();

  if (nuevaTareaNombre !== "") {
    agregarTarea(nuevaTareaNombre);
    actualizarInterfaz();
    inputTarea.value = "";
  }
}

function toggleCompletada(index) {
  if (index >= 0 && index < listaDeTareas.length) {
    listaDeTareas[index].completada = !listaDeTareas[index].completada;
  }
}

actualizarInterfaz();