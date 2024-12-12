import { ref } from 'vue';
import data from '@/assets/data.json'; // Importa el archivo JSON

export const useData = () => {
  // Usamos `ref` para envolver el array en un contenedor reactivo
  const datosJSON = ref({
    personas: data, // datos del archivo JSON importado
  });

  const agregarPersona = (persona) => {
    datosJSON.value.personas.push(persona); // Usamos `.value` para acceder a los datos dentro del ref
  };

  // Retornamos el objeto `ref` y la función para que los componentes puedan acceder a ellos
  return {
    datosJSON,
    agregarPersona
  };
};



// Usando reactive, que es mejor para objetos no se accede de la misma manera
/*

import { reactive } from 'vue';
import data from '@/assets/data.json'; // Importa el archivo JSON

export const useData = () => {
  // Usamos los datos importados directamente en el objeto reactivo
  const datosJSON = reactive({
    personas: data, // datos del archivo JSON importado
  });

  const agregarPersona = (persona) => {
    datosJSON.personas.push(persona); // Añadir nueva persona
  };

  // Retornamos el objeto (persona) reactivo y la función para poder acceder a ellos desde otros componentes
  return {
    datosJSON,
    agregarPersona
  };
};

*/