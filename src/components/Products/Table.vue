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
                    <Button class="bg-black text-white hover:bg-black/70">Editar</button>
                    <Button class="bg-red-500 hover:bg-red-500/70">Eliminar</Button>
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

defineProps(['products'])
defineEmits(['edit', 'delete'])
</script>

<style lang="scss" scoped></style>