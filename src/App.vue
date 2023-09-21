<script setup>

</script>

<template>
  <section class="flex mx-10 py-1">
    <div class="w-20">
      <h2 class="font-bold text-blue-950 text-lg">icon</h2>
    </div>
    <ul class="flex space-x-2 w-full justify-center">
      <li class="border-r-2 pr-1">
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/products">Product-List</router-link>
      </li>
    </ul>
  </section>
  
  <router-view :key="$route.fullPath"></router-view>
</template>


