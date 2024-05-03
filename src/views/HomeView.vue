<script lang="ts">
import CategoryList from '@/components/CategoryList.vue';
import ProductList from '@/components/ProductList.vue';
import { useProductsStore } from '@/stores/product';

function updateCategoryFromRouteParams(categoryIdParam: string|string[]){
  const productStore = useProductsStore();
    const categoryId = Number(categoryIdParam);
    productStore.selectCategory(categoryId);
}

export default{
  components: {
    ProductList,
    CategoryList
  },
  beforeRouteEnter(to, from) {
    updateCategoryFromRouteParams(to.params.categoryId);
      },
  beforeRouteUpdate(to, from) {
    updateCategoryFromRouteParams(to.params.categoryId);  
      },
  methods: {
  },
}

</script>

<template>
  <main>

      <v-row>
        <v-col cols="2">
          <CategoryList/>
        </v-col>

        <v-col cols="10">
          <ProductList />
        </v-col>
      </v-row>

    
  </main>
</template>
