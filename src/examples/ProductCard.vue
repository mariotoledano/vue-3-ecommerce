<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
    export default {
        props: ['product'],
    }
</script>

<template>
    <p>Nombre: {{ product.name }}</p>
    <p>Nombre: {{ product.price }}</p>
</template>