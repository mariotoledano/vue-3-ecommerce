<script lang="ts">
import type { Product } from '../model/types';
import ProductCard from './ProductCard.vue';

export default {
    components:{
        ProductCard
    },
    data() {
        return {
            products: [
                {name:'Silla', price:56, id:5, image: '/5-902_silla-elite-rojo_impara.jpg'},
                {name:'Micrófono', price:450, id: 7, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNpEgykIsokLm8QtubXZq21rb2TbgW3hpO1FslRehJeA&s'},
                {name:'Monitor', price:20, id: 20, image:'https://img.freepik.com/free-photo/view-computer-monitor-with-gradient-display_23-2150757379.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714089600&semt=ais'},
                {name:'Mouse', price:10, id:11},
                {name:'Teclado', price:35, id: 13},
                {name:'Altavoces', price:40, id: 15},
            ] as Product[]
        }
    },
}
</script>

<template>
    <v-row>
        <v-col 
            v-for="p in products" 
            :key="p.id"
            cols="4">
            <ProductCard            
                :product="p"/>
        </v-col>
    </v-row>
</template>