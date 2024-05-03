import { defineStore } from 'pinia'
import type { Product } from '@/model/types'

export const useProductsStore = defineStore('products', {
  state: () => ({
    order: '' as string,
    categoryId: null as number|null,
    _products: [
        {
            name:'Silla', 
            price:56, 
            id:5, 
            image: '/productos/silla.webp',
            categoryId: 1,
        },
            
        {
            name:'Micrófono', 
            price:450, 
            id: 7, 
            image:'/productos/microfono.jpg',
            categoryId: 2,
        },
        {
            name:'Monitor', 
            price:20, 
            id: 20, 
            image:'/productos/monitor.jpg',
            categoryId: 1,
        },
        {
            name:'Mouse', 
            price:10, 
            id:11, 
            image:'/productos/mouse.jpg',
            categoryId: 2,
        },
        {
            name:'Cascos', 
            price:35, 
            id: 13, 
            image:'/productos/headphones.jpg',
            categoryId: 2,
        },
        {
            name:'Altavoces', 
            price:40, 
            id: 15, 
            image:'/productos/parlantes.jpg',
            categoryId: 1,
        },

    ] as Product[]
}),
  getters: {
    products(state) {
        if (!state.categoryId){
            return state._products;
        }

        return state._products
        .filter(p => p.categoryId === state.categoryId);
    }
  },
  actions: {
    selectCategory(categoryId: number){
        this.categoryId = categoryId;
    },
    ordeByPrice(){

    },
    ordeByName(){

    },
  },
})