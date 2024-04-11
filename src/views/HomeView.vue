<template>
  <div class="flex h-[90vh]">
    <div class="w-1/2 mx-auto p-5 overflow-y-scroll">
      <select class="w-full p-2 border border-gray-300 rounded-md text-gray-900" v-model="categoria">
        <option value="">Todas las categorías</option>
        <option v-for="category in categoriesData" :key="category.id" :value="category.nombre">
          {{ category.nombre }}
        </option>
      </select>
      <input type="text" class="w-full p-2 border border-gray-300 rounded-md text-gray-900 mt-2" v-model="search"
        placeholder="Buscar producto" />

      <div class="grid grid-cols-2 gap-4 mt-4" v-if="productsData.length">
        <GridProductos v-for="product in productsData" :key="product.id" :product="product"
          @agregar="agregarProducto" />
      </div>
      <p class="text-center mt-12" v-else>No hay productos</p>
    </div>
    <div class="w-1/2 mx-auto h-[90vh] bg-gray-50 border-l-2 p-5">
      <h2 class="text-2xl font-bold ">Cesta de la compra</h2>
      <Cesta :productos="cesta" :total="total" @eliminar="eliminarProducto" @vaciar="vaciarCarrito"
        @comprar="comprarProductos" />
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

import GridProductos from '@/components/Tienda/GridProductos.vue';
import Cesta from '@/components/Tienda/Cesta.vue';

import products from '../assets/data/products.json'
import categorias from '../assets/data/categories.json'

// Refs
const productsData = ref([])
const categoriesData = ref([])
const categoria = ref('')
const search = ref('')
const cesta = ref([])
const total = ref(0)

// Router
const router = useRouter()

// Funciones
const agregarProducto = (product) => {
  // Si no hay stock, no se puede añadir al carrito
  if (product.stock === 0) {
    alert('Se ha agotado el stock de este producto')
    return
  }

  if (cesta.value.some((p) => p.id === product.id)) {
    const productoIndex = cesta.value.findIndex((p) => p.id === product.id)
    cesta.value[productoIndex].cantidad++
    // quitamos el producto del stock 
    const productoIndexData = productsData.value.findIndex((p) => p.id === product.id)
    productsData.value[productoIndexData].stock--
    return
  }
  else {
    cesta.value.push({ ...product, cantidad: 1 })
    // quitamos el producto del stock 
    const productoIndexData = productsData.value.findIndex((p) => p.id === product.id)
    productsData.value[productoIndexData].stock--
  }

}

const eliminarProducto = (product) => {
  const productoIndex = cesta.value.findIndex((p) => p.id === product.id)
  cesta.value[productoIndex].cantidad--

  if (cesta.value[productoIndex].cantidad === 0) {
    cesta.value.splice(productoIndex, 1)
  }
  // devolvemos el producto al stock
  const productoIndexData = productsData.value.findIndex((p) => p.id === product.id)
  productsData.value[productoIndexData].stock++
}

const vaciarCarrito = () => {
  // devolvemos los productos al stock 
  cesta.value.forEach((product) => {
    const productoIndexData = productsData.value.findIndex((p) => p.id === product.id)
    productsData.value[productoIndexData].stock += product.cantidad
  })
  // vaciamos la cesta
  cesta.value = []
}

const comprarProductos = () => {
  // Borramos los productos del localStorage
  localStorage.removeItem('products')
  localStorage.setItem('products', JSON.stringify(productsData.value))

  // Guardamos la compra en el localStorage (Y si hay datos en el localStorage, los borramos)
  if (localStorage.getItem('compra')) {
    localStorage.removeItem('compra')
  }

  localStorage.setItem('compra', JSON.stringify(cesta.value))
  // Vaciamos la cesta
  cesta.value = []

  // Redirigimos a la página de compra
  router.push('/orden')
}


// Watchers 
watch(search, (value) => {
  const productosFiltrados = products.filter((product) => {
    return product.nombre.toLowerCase().includes(value.toLowerCase())
  })

  productsData.value = productosFiltrados
})

watch(categoria, (value) => {
  if (value) {
    const productosFiltrados = products.filter((product) => {
      return product.categoria === value
    })

    productsData.value = productosFiltrados
  } else {
    productsData.value = products
  }
})

watch(cesta, (value) => {
  if (cesta.value.length === 0) {
    total.value = 0
  }

  total.value = cesta.value.reduce((acc, product) => {
    return acc + product.precio * product.cantidad
  }, 0)

}, { deep: true, immediate: true })

// Mounted
onMounted(() => {
  // Si existe la data en el localStorage, la cargamos
  // Si no, cargamos la data por defecto y la guardamos en el localStorage
  if (localStorage.getItem('products')) {
    productsData.value = JSON.parse(localStorage.getItem('products'))
  } else {
    productsData.value = products
    localStorage.setItem('products', JSON.stringify(products))
  }

  if (localStorage.getItem('categories')) {
    categoriesData.value = JSON.parse(localStorage.getItem('categories'))
  } else {
    categoriesData.value = categorias
    localStorage.setItem('categories', JSON.stringify(categorias))
  }
})

</script>