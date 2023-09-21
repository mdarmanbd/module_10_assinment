<script setup>
import{reactive , onBeforeMount} from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
console.log(route)
const post = reactive({
        body:''
})
onBeforeMount(()=>{
    fetch(`https://dummyjson.com/posts/${route.params.id}`)
    .then(response => response.json())
    .then(json => {
        post.body = json.body
    })
})


</script>

<template>
    <section class="w-full bg-green-200 py-5 mx-auto text-center">
        <h2 class="text-yellow-700 font-bold">this is child list body : {{ post.body }}</h2>
    </section>
    
</template>