<template>


    <nav class=" border-gray-200 bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="../assets/logo.svg" class="h-8" alt="Amazon" />
            </RouterLink>
            <button data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
                    <li v-for="route in routes" :key="route.path">
                        <RouterLink :to="route.path"
                            class="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700 hover:text-white"
                            :class="`text-white ${$route.path === route.path ? 'bg-white text-black' : ''}`">
                            {{ route.name }}
                        </RouterLink>

                    </li>
                    <Button @click="resetStorage" class="bg-green-300 px-3 py-1 text-sm font-medium rounded-md hover:bg-gray-700
                        hover:text-white">Reiniciar storage</Button>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script setup>

const routes = [
    { path: '/', name: 'Tienda' },
    { path: '/admin/products', name: 'Gestionar productos' },
    { path: '/admin/categories', name: 'Gestionar categorías' },

]

const resetStorage = () => {
    localStorage.removeItem('products')
    localStorage.removeItem('categories')
    localStorage.removeItem('compra')

    alert('Se ha reiniciado el storage')
    // Recargamos la página
    location.reload()

}

</script>

<style lang="scss" scoped></style>