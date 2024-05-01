<script lang="ts">
import { useCartStore } from '@/stores/cart';
export default {
    methods: {
        decrementQuantity(productId: number){
            this.cartStore.decrement(productId)
        },
        incrementQuantity(productId: number){
            this.cartStore.increment(productId);
        },
        deleteProduct(productId: number){
            this.cartStore.deleteProduct(productId)
        }
    },
    computed: {
        cartStore(){
            return useCartStore();
        },
        details() {
            return this.cartStore.details
        }
    }
}
</script>

<template>
<v-card class="mt-4">
    <v-card-title>Productos agregados al carrito</v-card-title>
    <v-card-text>
        <v-list v-if="details.length > 0">
            <v-list-item 
                v-for="detail in details" 
                :key="detail.productId">
                <v-list-item-title>
                    Product {{ detail.productId }} 
                    <v-btn
                        class="ml-2"
                        icon="mdi-minus"
                        size="x-small" 
                        @click="decrementQuantity(detail.productId)"/>
                   Cantidad: {{detail.quantity}}
                    <v-btn
                        icon="mdi-plus"
                        size="x-small" 
                        @click="incrementQuantity(detail.productId)"/>
                    <v-btn
                        class="ml-2"
                        size="x-small"
                        icon="mdi-delete" 
                        @click="deleteProduct(detail.productId)"/>
                </v-list-item-title>
            </v-list-item>
        </v-list>
        <p v-else>Aún no has agregado productos a tu carrito de compra.
            Haz <RouterLink to="/">click aquí</RouterLink> para ve rlos productos disponibles.
        </p>
    </v-card-text>
</v-card>

</template>