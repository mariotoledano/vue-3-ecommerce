<script lang="ts">
import type { Category } from '@/model/types';
import OrderOptions from './left/OrderOptions.vue';

    export default {
        components: {
            OrderOptions,
        },
        data() {
            return {
                categories: [{
                    id: 1,
                    name: 'Oficina',
                    description: 'Productos para la oficina'
                },{
                    id: 2,
                    name: 'Ordenador',
                    description: 'Productos para tu ordenador'
                }] as Category[]
            };
        },
        methods: {
            clearCategory() {
                this.$router.push({
                    name: 'home'
                })
            },
            goToCategory(categoryId:number){
                this.$router.push({
                    name:'category',
                    //params: {categoryId: categoryId}
                    params: {categoryId}
                })
            },
        }
    }
</script>

<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">
            <v-list-subheader>Categorías</v-list-subheader>
            <v-list-item link @click="clearCategory()" :active="$route.name === 'home'">
                Todas
            </v-list-item>
            <v-list-item :active="$route.name === 'category' && Number($route.params.categoryId) === category.id"
                v-for="category in categories" :key="category.id" link @click="goToCategory(category.id)">
                <v-list-item-title>
                    {{ category.name }}
                </v-list-item-title>
            </v-list-item>
            <v-divider class="my-2"></v-divider>
            <OrderOptions/>
        </v-list>
    </v-sheet>
</template>