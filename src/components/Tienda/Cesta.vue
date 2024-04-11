<template>
    <div>
        <div v-if="productos.length === 0"
            class="bg-white p-4 rounded-md mt-2 shadow-md text-center flex flex-col items-center gap-4">
            <p>No hay productos en la cesta</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
        </div>
        <div v-else class="bg-white p-4 rounded-md mt-2 shadow-md">
            <div class="grid grid-cols-1 gap-4 mt-4">
                <div v-for="producto in productos" :key="producto.id"
                    class="bg-white p-4 rounded-md  justify-between shadow-md flex  items-center">
                    <div class="flex items-center gap-4">
                        <img :src="'/src/assets/' + producto.imagen" alt="producto.nombre"
                            class="w-[60px] h-[60px] rounded-md" />
                        <div>
                            <h3 class="text-lg font-bold">{{ producto.nombre }}</h3>
                            <p class="text-sm text-gray-500">{{ producto.descripcion }}</p>
                            <p class="text-lg font-bold mt-2 flex gap-2 items-center">
                            <p class="text-base font-normal">{{ producto.cantidad }} x</p> {{ producto.precio }} €</p>
                        </div>
                    </div>
                    <button @click="$emit('eliminar', producto)"
                        class="bg-red-500 text-white hover:bg-red-700 w-12 h-12 rounded-md flex justify-center items-center">
                        -
                    </button>
                </div>

                <div class="bg-blue- text-black p-4 rounded-md mt-2 shadow-md flex justify-between items-center">
                    <p class="text-lg font-bold">Total:</p>
                    <p class="text-lg font-bold">
                        {{ Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(total) }}
                    </p>
                </div>
                <div class="flex justify-between gap-4 mt-4">
                    <button @click="$emit('vaciar')"
                        class="bg-red-500 text-white hover:bg-red-700 w-1/2 p-2 rounded-md">Vaciar cesta</button>
                    <button @click="$emit('comprar')"
                        class="bg-blue-500 text-white hover:bg-blue-700 w-1/2 p-2 rounded-md">Realizar orden</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { watch, ref } from 'vue'
const props = defineProps(['productos', 'total'])
defineEmits(['eliminar', 'vaciar', 'comprar'])



</script>

<style lang=" scss" scoped>
                    </style>
