<template>
    <div>
        <Header title="Categorías" subtitle="Gestión de categorías">
            <RouterLink to="/admin/categories/crear"
                class="px-4 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-700/90">Nueva
                categoría
            </RouterLink>
        </Header>
        <Input v-model="search" placeholder="Buscar categoría" />
        <TableCategories :categories="categoriesData" @eliminar="eliminarCategoria" />
    </div>
</template>

<script setup>
import Header from '@/components/Categories/Header.vue'
import TableCategories from '@/components/Categories/Table.vue'
import categories from '../../assets/data/categories.json'
import { Input } from '@/components/ui/input'
import { ref, onMounted, watch } from 'vue'

const categoriesData = ref([])
const search = ref('')

watch(search, (value) => {
    const categoriasFiltradas = categories.filter((category) => {
        return category.nombre.toLowerCase().includes(value.toLowerCase())
    })

    categoriesData.value = categoriasFiltradas
})

onMounted(() => {
    if (localStorage.getItem('categories')) {
        categoriesData.value = JSON.parse(localStorage.getItem('categories'))
    } else {
        categoriesData.value = categories
        localStorage.setItem('categories', JSON.stringify(categories))
    }
})

const eliminarCategoria = (id) => {
    const categoriasFiltradas = categoriesData.value.filter((category) => {
        return category.id !== id
    })

    categoriesData.value = categoriasFiltradas
    localStorage.setItem('categories', JSON.stringify(categoriasFiltradas))

    alert('Categoría eliminada')


}

</script>

<style lang="scss" scoped></style>