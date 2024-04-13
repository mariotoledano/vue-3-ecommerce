<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import ProductCard from './ProductCard.vue';

export default {
    components:{
        ProductCard
    },
    data(){
        return{
            products: [
                {name: 'Silla', price: 56},
                {name: 'Monitor', price:450},
                {name: 'Micrófono', price:120},
            ]
        }
    },
    methods:{

    },
}
</script>

<template>
    <ProductCard 
    v-for="p in products" 
    :product="p"/>
</template>