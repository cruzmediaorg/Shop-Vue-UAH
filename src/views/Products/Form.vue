<template>
    <Header :title="esNuevo ? 'Nuevo producto' : 'Editar producto'" subtitle="Gestión de productos">
        <RouterLink to="/admin/products" class="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-500/90">Cancelar
        </RouterLink>
    </Header>

    <div class="flex flex-col space-y-4">
        <Label>Información del producto</Label>
        <Input v-model="producto.nombre" label="Nombre" />
        <Label>Código</Label>
        <Input v-model="producto.codigo" label="Código" />
        <Label>Descripción</Label>
        <Input v-model="producto.descripcion" label="Descripción" />
        <Label>Precio</Label>
        <Input type="number" v-model="producto.precio" label="Precio" />
        <Label>Stock</Label>
        <Input type="number" v-model="producto.stock" label="Stock" />
        <Label>Imagen (Ruta en el directorio assets/images)</Label>
        <Input v-model="producto.imagen" label="Imagen" />
        <Button @click="guardarProducto" class="bg-blue-700 text-white hover:bg-blue-700/90">Guardar</Button>

    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue';

import Header from '@/components/Products/Header.vue'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const route = useRoute();
const router = useRouter();
const esNuevo = route.name === 'admin-products-create';

const producto = ref({
    nombre: '',
    codigo: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    imagen: ''
})

onMounted(() => {
    if (!esNuevo) {
        const productos = JSON.parse(localStorage.getItem('products'));
        const productoEncontrado = productos.find(product => product.id === Number(route.params.id));
        producto.value = productoEncontrado;

    }
})




const guardarProducto = () => {
    let productos = JSON.parse(localStorage.getItem('products')) || [];
    if (esNuevo) {
        producto.value.id = productos.length + 1;
        productos.push(producto.value);
    } else {
        const index = productos.findIndex(product => product.id === producto.value.id);
        productos[index] = producto.value;
    }
    localStorage.setItem('products', JSON.stringify(productos));
    router.push({ name: 'admin-products' });
}



</script>

<style lang="scss" scoped></style>