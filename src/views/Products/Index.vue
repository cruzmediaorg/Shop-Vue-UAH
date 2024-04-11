<template>
    <div>
        <Header title="Productos" subtitle="Gestión de productos">
            <Button class="bg-blue-700 text-white hover:bg-blue-700/70">Nuevo producto</Button>
        </Header>
        <Input v-model="search" placeholder="Buscar producto" />
        <TableProducts :products="productsData" />
    </div>
</template>

<script setup>
import Header from '@/components/Products/Header.vue'
import TableProducts from '@/components/Products/Table.vue'
import products from '../../assets/data/products.json'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ref, onMounted, watch } from 'vue'

const productsData = ref([])
const search = ref('')

watch(search, (value) => {
    const productosFiltrados = products.filter((product) => {
        return product.nombre.toLowerCase().includes(value.toLowerCase())
    })

    productsData.value = productosFiltrados
})

onMounted(() => {
    if (localStorage.getItem('products')) {
        productsData.value = JSON.parse(localStorage.getItem('products'))
    } else {
        productsData.value = products
        localStorage.setItem('products', JSON.stringify(products))
    }
})

</script>

<style lang="scss" scoped></style>