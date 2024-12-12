<template>
  <div>
    <h2>Lista de Personas</h2>
    <ul>
      <li v-for="(persona, index) in datosJSON.personas" :key="index">
        {{ persona.nombre }} {{ persona.apellido }} ({{ persona.edad }}) - {{ persona.estado }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useData } from '@/composables/useData';  // Importamos el composable

// Obtenemos los datos reactivos desde el composable
const { datosJSON } = useData();
</script>
