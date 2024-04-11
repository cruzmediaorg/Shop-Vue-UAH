<template>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>
                    Imagen
                </TableHead>
                <TableHead>
                    Nombre
                </TableHead>
                <TableHead>
                    Código
                </TableHead>
                <TableHead>
                    Descripción
                </TableHead>
                <TableHead>
                    Precio
                </TableHead>
                <TableHead>
                    Stock
                </TableHead>
                <TableHead>
                    Acciones
                </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow v-for="product in products" :key="product.id">
                <TableCell class="font-medium">
                    <img :src="'/src/assets/' + product.imagen" alt="product.name"
                        class="w-[50px] h-[50px] rounded-md" />
                </TableCell>
                <TableCell>
                    {{ product.nombre }}
                </TableCell>
                <TableCell>
                    {{ product.codigo }}
                </TableCell>
                <TableCell>
                    {{ product.descripcion }}
                </TableCell>
                <TableCell>
                    {{ product.precio }}
                </TableCell>
                <TableCell>
                    {{ product.stock }}
                </TableCell>
                <TableCell class="flex space-x-2">
                    <RouterLink :to="'/admin/products/' + product.id + '/editar'"
                        class="bg-black text-white hover:bg-black/70 px-2 py-1 h-fit rounded-md">
                        Editar
                    </RouterLink>
                    <button @click="$emit('eliminar', product.id)"
                        class="bg-red-500 text-white hover:bg-red-500/70 px-2 py-1 h-fit rounded-md">Eliminar</button>
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>

</template>

<script setup>
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Button } from "@/components/ui/button"
import { RouterLink } from 'vue-router'

defineProps(['products'])
defineEmits(['eliminar'])
</script>

<style lang="scss" scoped></style>