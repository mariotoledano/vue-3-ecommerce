import { defineStore } from 'pinia'
import type { Category } from '@/model/types'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [{
        id: 1,
        name: 'Oficina',
        description: 'Productos para la oficina'
    },{
        id: 2,
        name: 'Ordenador',
        description: 'Productos para tu ordenador'
    }] as Category[]
}),
  getters: {
    
  },
  actions: {
    
  },
})