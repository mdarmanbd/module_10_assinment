<script setup>
import {ref,reactive,onBeforeMount} from 'vue'
import {useRoute} from 'vue-router'

const products = ref([]);

const fetchProducts = () => {
    fetch(`https://fakestoreapi.com/products/`)
    .then(response => response.json())
    .then(data => {
        products.value = data
    })
}

onBeforeMount(() => fetchProducts())
</script>

<template>
    <section class="w-full bg-green-200 py-5 mx-auto text-center">
        <div class="grid grid-cols-4 gap-5 mx-5">
            <div v-for="(product, index) in products" :key="index" class="">
                <div class="pt-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#" class="flex justify-center">
                        <img class="rounded-t-lg w-20 " :src="product.image"  />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ product.title }}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Price : {{ product.price }} $</p>
                        <router-link :to='`/products/${product.id}`' class="bg-green-500 w-6 px-1 text-white">View Details</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>