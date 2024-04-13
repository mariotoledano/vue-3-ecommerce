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
}
</script>

<template>
    <p>Nombre: {{ product.name }}</p>
    <p>Nombre: {{ product.price }}</p>
    <hr/>
</template>