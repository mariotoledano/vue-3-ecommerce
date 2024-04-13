<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import type { PropType } from 'vue';
import type { Product } from './Product'

export default {
    props:{
        product: {
            type: Object as PropType<Product>,
            required: true
        } 
    },
    methods: {
        onAddButtonClick(){
           // console.log("Agregando producto" + this.product.id)
           this.$emit("addProduct")
        }
    },
    emits: ['addProduct']
}
</script>

<template>
    <p>Nombre: {{ product.name }}</p>
    <p>Precio: {{ product.price }}</p>
    <button @click="onAddButtonClick">
        Agregar al carrito
    </button>
    <hr/>
</template>