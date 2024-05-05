<script lang="ts">
import LeftMenu from '@/components/left/LeftMenu.vue';
import ProductList from '@/components/ProductList.vue';
import { useCategoriesStore } from '@/stores/categories';
import { useProductsStore } from '@/stores/product';

function updateCategoryFromRouteParams(categoryIdParam: string|string[]){
  const productStore = useProductsStore();
    const categoryId = Number(categoryIdParam);
    productStore.selectCategory(categoryId);
}

export default{
  components: {
    ProductList,
    LeftMenu
  },
  beforeRouteEnter(to) {
    updateCategoryFromRouteParams(to.params.categoryId);
      },
  beforeRouteUpdate(to) {
    updateCategoryFromRouteParams(to.params.categoryId);  
      },
  mounted() {

    setTimeout(() =>{
    const productStore = useProductsStore();
    productStore.fetchProducts();
    }, 4000)

    setTimeout(() =>{
    const categoriesStore = useCategoriesStore();
    categoriesStore.fetchCategories();
    }, 2000)

  }
}
</script>

<template>
  <main>
      <v-row>
        <v-col cols="2">
          <LeftMenu/>
        </v-col>
        <v-col cols="10">
          <ProductList />
        </v-col>
      </v-row>    
  </main>
</template>
