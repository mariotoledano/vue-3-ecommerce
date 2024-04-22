<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { id } from 'vuetify/locale';

export default {
  data() {
    return {
      details: [{productId:5, quantity:3}]
    };
  }
}
</script>

<template>
  <v-app>
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar class="me-4 " color="grey-darken-1" size="32"></v-avatar>
        
        <RouterLink to="/" custom v-slot="{navigate}">
          <v-btn variant="text" @click="navigate">Home </v-btn>  
        </RouterLink>
        <RouterLink to="/cart" custom v-slot="{navigate}">
          <v-btn variant="text"  @click="navigate">Cart </v-btn>
        </RouterLink>
        <RouterLink to="/about" custom v-slot="{navigate}">
          <v-btn variant="text"  @click="navigate">About </v-btn>
        </RouterLink>

        <v-spacer></v-spacer>

        <v-responsive max-width="160">
          <v-text-field density="compact" label="Search" rounded="lg" variant="solo-filled" flat hide-details
            single-line></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <!--Router view muestra los componentes de la dirección-->
        <RouterView :details="'details'"/>
      </v-container>
    </v-main>
  </v-app>
</template>
