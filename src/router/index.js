import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Index from '../views/Products/Index.vue'
import Orden from '../views/Orden.vue'
import Form from '../views/Products/Form.vue'
import IndexCategoria from '@/views/Categories/Index.vue'
import FormCategoria from '@/views/Categories/Form.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin/products',
      name: 'admin-products',
      component: Index
    },
    {
      path: '/orden',
      name: 'orden',
      component: Orden
    },
    {
      path: '/admin/products/:id/editar',
      name: 'admin-products-edit',
      component: Form
    },
    {
      path: '/admin/products/crear',
      name: 'admin-products-create',
      component: Form
    },
    {
      path: '/admin/categories',
      name: 'admin-categories',
      component: IndexCategoria
    },
    {
      path: '/admin/categories/:id/editar',
      name: 'admin-categories-edit',
      component: FormCategoria
    },
    {
      path: '/admin/categories/crear',
      name: 'admin-categories-create',
      component: FormCategoria
    },
    // Redireccionar a la página de inicio si la ruta no existe
    {
      path: '/:pathMatch(.*)*',
      redirect: {
        name: 'home'
      }
    }
  ]
})

export default router