<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import type { Product } from './Product';
import ProductCard from './ProductCard.vue';

export default {
    components:{
        ProductCard
    },
    data(){
        return{
            products: <Array<Product>> [
                {name: 'Silla', price: 56, id: 5},
                {name: 'Monitor', price:450, id: 7},
                {name: 'Micrófono', price:20, id: 20}
            ]
        }
    },
    methods : {
        onProductAdded(productId: number) {
            console.log('Agregar producto ' + productId)
        }
    }
}
</script>

<template>
    <ProductCard 
    v-for="p in products" 
    :product="p"
    v-on:addProduct="onProductAdded(p.id)"    
    />
</template>