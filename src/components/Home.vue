<script setup>
import { ref,reactive,onBeforeMount } from 'vue'

const product = ref('');

onBeforeMount(()=>
  {
      fetch(`https://fakestoreapi.com/products/`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        product.value = json
        
    })
  }
)

</script>

<template>
  <section class="bg-gray-100 ">
    <h2 class="text-center underline text-xl font-bold w-full">welcome our dream-shop</h2>
    <div class="grid grid-cols-4 gap-3 pt-5 mx-5">
      <div v-for="(products , index) in product" :key="index" class="w-full text-center pt-5">
         <h2><span class="text-green-500 font-xl">product title :</span> {{ products.title }}</h2>
        <img :src="products.image" :alt="products.title" class="w-full h-40">
        <p> product price : {{ products.price }}</p>
      </div>
    </div>
  </section>
      
</template>

<style scoped>

</style>
