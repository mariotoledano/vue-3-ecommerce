<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import type { CardDetail, Product } from './types';
import ProductCard from './ProductCard.vue';
import Cart from './Cart.vue';

export default {
    components:{
        ProductCard,
        Cart
    },
    data(){
        return{
            products: <Array<Product>>[
                {name: 'Silla', price: 56, id: 5},
                {name: 'Monitor', price:450, id: 7},
                {name: 'Micrófono', price:20, id: 20}
            ],
            details: <Array<CardDetail>>[]
        }
    },
    methods : {
        onProductAdded(productId: number) {
            //console.log('Agregar producto ' + productId)
            const detailFound = this.details.find(d => d.productId == productId);
            
            if (detailFound) {
                detailFound.quantity += 1;
            } else{
                this.details.push({
                productId,
                quantity: 1
            });

            }
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
    <Cart :details="details"/>
</template>