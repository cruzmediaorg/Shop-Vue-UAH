<template>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>
                    ID
                </TableHead>
                <TableHead>
                    Nombre
                </TableHead>

                <TableHead>
                    Acciones
                </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow v-for="category in categories" :key="category.id">
                <TableCell>
                    {{ category.id }}
                </TableCell>
                <TableCell>
                    {{ category.nombre }}
                </TableCell>

                <TableCell class="flex space-x-2">
                    <RouterLink :to="'/admin/categories/' + category.id + '/editar'"
                        class="bg-black text-white hover:bg-black/70 px-2 py-1 h-fit rounded-md">
                        Editar
                    </RouterLink>
                    <button @click="$emit('eliminar', category.id)"
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

defineProps(['categories'])
defineEmits(['eliminar'])
</script>

<style lang="scss" scoped></style>