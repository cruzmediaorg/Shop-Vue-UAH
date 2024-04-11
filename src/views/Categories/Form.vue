<template>
    <Header :title="esNuevo ? 'Nuevo categoría' : 'Editar categoría'" subtitle="Gestión de categorias">
        <RouterLink to="/admin/categories" class="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-500/90">
            Cancelar
        </RouterLink>
    </Header>

    <div class="flex flex-col space-y-4">
        <Label>Nombre</Label>
        <Input v-model="category.nombre" label="Nombre" />

        <Button @click="guardarCategoria" class="bg-blue-700 text-white hover:bg-blue-700/90">Guardar</Button>

    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

import Header from '@/components/Categories/Header.vue'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const route = useRoute();
const router = useRouter();
const esNuevo = route.name === 'admin-categories-create';

const category = ref({
    nombre: '',
})

onMounted(() => {
    if (!esNuevo) {
        const categories = JSON.parse(localStorage.getItem('categories'));
        const categoriaEncontrada = categories.find(category => category.id === Number(route.params.id));
        category.value = categoriaEncontrada;

    }
})




const guardarCategoria = () => {
    let categories = JSON.parse(localStorage.getItem('categories')) || [];
    if (esNuevo) {
        category.value.id = categories.length + 1;
        categories.push(category.value);
    } else {
        const index = categories.findIndex(category => category.id === category.value.id);
        categories[index] = category.value;
    }
    localStorage.setItem('categories', JSON.stringify(categories));
    router.push({ name: 'admin-categories' });
}



</script>

<style lang="scss" scoped></style>