# Guía de Vue.js para el Examen

## Conceptos Básicos de Vue.js

### v-model
El `v-model` permite vincular el valor de un elemento del DOM (como un input, checkbox o select) con una propiedad del componente de forma bidireccional, lo que significa que cualquier cambio en el input actualiza la propiedad y viceversa.

**Ejemplo:**
```vue
<template>
  <input v-model="nombre" placeholder="Escribe tu nombre" />
  <p>Hola, {{ nombre }}!</p>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
    };
  },
};
</script>
```

---

### v-on
El `v-on` se usa para agregar escuchadores de eventos a los elementos del DOM, como clics, envíos de formularios, entre otros. Su abreviación es `@`.

**Ejemplo:**
```vue
<template>
  <button @click="saludar">Haz clic</button>
</template>

<script>
export default {
  methods: {
    saludar() {
      alert('¡Hola!');
    },
  },
};
</script>
```

---

## Temas Específicos de Vue.js

### defineProps
`defineProps` es una función de la API Composition que define las propiedades que un componente puede recibir desde su componente padre. Estas propiedades se usan para pasar datos al componente hijo.

**Ejemplo:**
```vue
<template>
  <p>Hola, {{ mensaje }}!</p>
</template>

<script setup>
defineProps(['mensaje']);
</script>
```

---

### defineEmits
`defineEmits` permite definir eventos personalizados que un componente hijo puede emitir hacia su componente padre. Esto es útil para comunicar acciones o datos hacia el componente que lo contiene.

**Ejemplo:**
```vue
<template>
  <button @click="enviar">Enviar</button>
</template>

<script setup>
const emit = defineEmits(['miEvento']);
function enviar() {
  emit('miEvento', 'Hola desde el hijo');
}
</script>
```

---

### computed
Las propiedades computadas (`computed`) son funciones que devuelven valores derivados de las propiedades del estado reactivo. Se recalculan automáticamente cuando cambian las propiedades dependientes.

**Ejemplo:**
```vue
<template>
  <p>Mensaje: {{ mensajeEnMayusculas }}</p>
</template>

<script>
export default {
  data() {
    return {
      mensaje: 'hola mundo',
    };
  },
  computed: {
    mensajeEnMayusculas() {
      return this.mensaje.toUpperCase();
    },
  },
};
</script>
```

---

### provide / inject
`provide` e `inject` son herramientas de Vue que permiten compartir datos entre un componente padre y sus descendientes, sin necesidad de pasar propiedades directamente a través de cada componente intermedio.

**Ejemplo (Padre):**
```vue
<template>
  <Hijo />
</template>

<script>
import { provide } from 'vue';
import Hijo from './Hijo.vue';

export default {
  setup() {
    provide('mensaje', 'Hola desde el padre');
  },
};
</script>
```

**Ejemplo (Hijo):**
```vue
<template>
  <p>{{ mensaje }}</p>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const mensaje = inject('mensaje');
    return { mensaje };
  },
};
</script>
```

---

### Conectarse a un JSON
Para consumir un archivo JSON local en Vue.js, puedes importarlo directamente como un módulo de JavaScript.

**Ejemplo:**
```vue
<template>
  <div v-for="usuario in usuarios" :key="usuario.id">
    <p>{{ usuario.nombre }}</p>
  </div>
</template>

<script>
import usuariosData from '@/data/usuarios.json';

export default {
  data() {
    return {
      usuarios: usuariosData,
    };
  },
};
</script>
```

---

### router-link
`router-link` es un componente de Vue Router que permite crear enlaces de navegación entre diferentes rutas de la aplicación, de forma declarativa y con soporte para transiciones y estilos activos.

**Ejemplo:**
```vue
<template>
  <div>
    <router-link to="/inicio" active-class="active-link">Inicio</router-link>
    <router-link to="/perfil" active-class="active-link">Perfil</router-link>
  </div>
</template>
```

---

### router-view
`router-view` es un componente utilizado para renderizar el contenido de la ruta actual. Es donde las vistas asociadas a las rutas definidas se insertan dinámicamente.

**Ejemplo:**
```vue
<template>
  <router-view />
</template>
```

---

## Menú de Navegación

### Menú en Markdown
```markdown
# Menú de Navegación

- [Inicio](#inicio)
- [Acerca de](#acerca-de)
- [Contacto](#contacto)
```

### Menú con Vue Router
```vue
<template>
  <nav>
    <router-link to="/inicio">Inicio</router-link> |
    <router-link to="/acerca-de">Acerca de</router-link> |
    <router-link to="/contacto">Contacto</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {};
</script>
