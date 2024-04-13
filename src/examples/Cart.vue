<script lang="ts">
import type { PropType } from 'vue';
import type { CardDetail } from './types';

export default {
    props: {
        details: {
            type: Object as PropType<Array<CardDetail>>,
            required: true,
        }
    }
}
</script>

<template>
    <p>Productos agregados al carrito</p>
    <ul>
        <li v-for="detail in details">
            Product {{ detail.productId }} (Qty: {{detail.quantity}})
        </li>
    </ul>

</template>