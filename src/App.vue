<script lang="ts">
import { RouterView } from 'vue-router'
import TopBar from './components/TopBar.vue';

export default {
  components:{
    TopBar
  }
}
</script>

<template>
  <v-app>
    <TopBar/>
    <v-main>
      <v-container>
        <!--Router view muestra los componentes de la dirección-->
        <RouterView/>
      </v-container>
    </v-main>
  </v-app>
</template>
