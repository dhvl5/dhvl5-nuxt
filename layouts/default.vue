<template>
  <div class="bg-white ">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <nuxt/>
    <div class="flex flex-row justify-center items-center bg-gray-200 w-full h-20 fixed top-0">
        <!-- <img class="transform absolute left-0 ease-in-out duration-300 shadow-2xl rounded-full w-auto h-auto scale-20" src="~/assets/me.png"/> -->
        <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/">HOME</nuxt-link>
        <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/blog">BLOG</nuxt-link>
        <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/about">ABOUT ME</nuxt-link>
        <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/portfolio">PORTFOLIO</nuxt-link>
        <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/contact">CONTACT ME</nuxt-link>
    </div>
  </div>
</template>

<script>
  
</script>