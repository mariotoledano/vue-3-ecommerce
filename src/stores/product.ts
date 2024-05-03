import { defineStore } from 'pinia'
import type { Product } from '@/model/types'

export const useProductsStore = defineStore('products', {
  state: () => ({
    order: 'price' as string,
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
        let products = null;
        //Filtra
        if (state.categoryId) {
            products = state._products
            .filter(p => p.categoryId === state.categoryId);
        } else {
            products = state._products;
        }

        //Ordenar
        if(state.order == ''){
            return products;
        }
        if (state.order === 'price'){
            return products.sort((a,b) => a.price - b.price);
        }
        if (state.order === 'priceDesc'){
            return products.sort((a,b) => b.price - a.price);
        }
        if (state.order === 'name'){
            return products.sort((a,b) => a.name.localeCompare(b.name));
        }
        if (state.order === 'nameDesc'){
            return products.sort((a,b) => b.name.localeCompare(a.name));
        }
        else {
            return products;
        }
    }
  },
  actions: {
    selectCategory(categoryId: number){
        this.categoryId = categoryId;
    },
    orderByPrice(){
        this.order = 'price';
    },
    orderByPriceDesc(){
        this.order = 'priceDesc';
    },
    orderByName(){
        this.order = 'name';
    },
    orderByNameDesc(){
        this.order = 'nameDesc';
    },
  },
})