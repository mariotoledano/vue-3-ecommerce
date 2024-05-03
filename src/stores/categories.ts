import { defineStore } from 'pinia'
import type { Category } from '@/model/types'
import categoriesData from '../../public/data/categories.json'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: categoriesData as Category[]
}),
  getters: {
    
  },
  actions: {
    
  },
})