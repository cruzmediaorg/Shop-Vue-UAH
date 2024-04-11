<template>
    <div>
        <Header title="Productos" subtitle="Gestión de productos">
            <RouterLink to="/admin/products/crear"
                class="px-4 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-700/90">Nuevo
                producto
            </RouterLink>
        </Header>
        <Input v-model="search" placeholder="Buscar producto" />
        <TableProducts :products="productsData" @eliminar="eliminarProducto" />
    </div>
</template>

<script setup>
import Header from '@/components/Products/Header.vue'
import TableProducts from '@/components/Products/Table.vue'
import products from '../../assets/data/products.json'
import { Input } from '@/components/ui/input'
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

const eliminarProducto = (id) => {
    const productos = JSON.parse(localStorage.getItem('products'))
    const productosFiltrados = productos.filter((product) => product.id !== id)
    localStorage.setItem('products', JSON.stringify(productosFiltrados))
    productsData.value = productosFiltrados

    alert('Producto eliminado')
}

</script>

<style lang="scss" scoped></style>