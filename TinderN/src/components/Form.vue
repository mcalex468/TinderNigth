<template>
    <div>
        <form action="">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre">

            <label for="apellido">Apellido</label>
            <input type="text" name="apellido" id="apellido">

            <label for="ciudad">Ciudad</label>
            <input type="text" name="ciudad" id="ciudad">

            <label for="edad">Edad</label>
            <input type="text" name="edad" id="edad">

            <label for="estado">Estado</label>
            <select name="estado" id="estado">
                <option value="disponible">Disponible</option>
                <option value="no_disponible">No disponible</option>
            </select>
            
            <button type="submit">Enviar</button>
        </form>

    </div>
</template>

<script setup> 


</script>