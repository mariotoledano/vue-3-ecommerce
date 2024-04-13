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
                {name: 'Silla', price: 56},
                {name: 'Monitor', price:450},
                {name: 'Micrófono', price:20}
            ]
        }
    }
}
</script>

<template>
    <ProductCard 
    v-for="p in products" 
    :product="p"/>
</template>