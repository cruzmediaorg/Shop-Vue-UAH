<template>
    <div class="flex flex-col h-[100vh]  max-w-screen-lg mx-auto" v-if="data.length > 0">
        <h2 class="text-2xl font-bold mt-4">¡Órden realizada!</h2>
        <p class=" mt-4">Gracias por tu compra</p>
        <p class=" mt-4">En breve recibirás un email con los detalles de tu compra</p>
        <p class=" mt-4">Estos son los productos que has comprado:</p>
        <div class="bg-white p-4 rounded-md mt-2 shadow-md w-full">
            <div class="grid grid-cols-1 gap-4 mt-4">
                <div v-for="producto in data" :key="producto.id"
                    class="bg-white p-4 rounded-md  justify-between shadow-md flex  items-center">
                    <div class="flex items center gap-4">
                        <img :src="'/src/assets/' + producto.imagen" alt="producto.nombre"
                            class="w-[60px] h-[60px] rounded-md" />
                        <div>
                            <h3 class="text-lg font-bold">{{ producto.nombre }}</h3>
                            <p class="text-sm text-gray-500">{{ producto.descripcion }}</p>
                            <p class="text-lg font-bold mt-2 flex gap-2 items-center">
                            <p class="text-base font-normal">{{ producto.cantidad }} x</p> {{ producto.precio }} €</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="my-4">
            <h2 class="text-2xl font-bold mt-4">Total:</h2>
            <p class="text-2xl font-normal">
                {{ Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(total) }}
            </p>
        </div>

    </div>
    <div class="flex flex-col h-[100vh]  max-w-screen-lg mx-auto" v-else>
        <h2 class="text-2xl font-bold mt-4">¡No hay productos en la cesta!</h2>
        <p class=" mt-4">Por favor, añade productos a la cesta para realizar una compra</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const data = ref([])
const total = ref(0)
onMounted(() => {
    // Get data from storage
    if (localStorage.getItem('compra')) {
        data.value = JSON.parse(localStorage.getItem('compra'))
        total.value = data.value.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
    } else {
        data.value = []
    }
})
</script>

<style lang="scss" scoped></style>