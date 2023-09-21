<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <section class="flex justify-between mx-10 py-1">
    <div class="">
      <h2 class="font-bold text-blue-950 text-lg">icon</h2>
    </div>
    <ul class="flex space-x-2">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
      <li>
        <router-link to="/post/1">Post-1</router-link>
      </li>
      <li>
        <RouterLink to="/post/2">post-2</RouterLink>
      </li>
    </ul>
  </section>
  
  <router-view :key="$route.fullPath"></router-view>
</template>


