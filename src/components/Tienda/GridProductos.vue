<template>
    <div class="bg-white p-4 rounded-md shadow-md flex flex-col justify-between">
        <div class="zoom-container">
            <div>
                <img :src="'/src/assets/' + product.imagen" alt="product.name"
                    class="w-full h-[200px] object-contain hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 class="text-lg font-bold mt-2">{{ product.nombre }}</h3>
            <p class="text-sm text-gray-500">{{ product.descripcion }}</p>
            <p class="text-lg font-bold mt-2">{{ product.precio }} €</p>
            <p class="text-sm text-gray-500">Cantidad en existencia: {{ product.stock }}</p>
        </div>
        <button @click="agregar(product)"
            class=" bg-blue-500 text-white hover:bg-blue-700 w-full p-2 mt-2 rounded-md">Añadir al carrito</button>
    </div>
</template>

<script setup>
defineProps(['product'])
const emit = defineEmits(['agregar'])

const agregar = (product) => {
    emit('agregar', product)
}

</script>

<style lang="scss" scoped></style>