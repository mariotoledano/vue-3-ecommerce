<script lang="ts">
import { useProductsStore } from '@/stores/product';
import { mapActions, mapState } from 'pinia';

export default {
    methods: {
        ...mapActions(useProductsStore,['orderByPrice','orderByName', 'orderByPriceDesc', 'orderByNameDesc'])
    },
    computed: {
        ...mapState(useProductsStore, ['order'])
    }
}
</script>

<template>
    <v-list-subheader>Ordenar por</v-list-subheader>
    <v-list-item link @click="orderByPrice" :active="order === 'price'">
        <v-list-item-title>
            Más econoómico
        </v-list-item-title>
    </v-list-item>
    <v-list-item link @click="orderByPriceDesc" :active="order === 'priceDesc'">
        <v-list-item-title>
            Más caro
        </v-list-item-title>
    </v-list-item>
    <v-list-item link @click="orderByName" :active="order === 'name'">
        <v-list-item-title>
            Nombre (A-Z)
        </v-list-item-title>
    </v-list-item>
    <v-list-item link @click="orderByNameDesc" :active="order === 'nameDesc'">
        <v-list-item-title>
            Nombre (Z-A)
        </v-list-item-title>
    </v-list-item>
</template>