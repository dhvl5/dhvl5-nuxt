<template>
  <div class="bg-white ">
    <nuxt/>
    <div class="flex flex-row justify-center items-center bg-gray-200 w-full h-20 fixed top-0">
        <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/">HOME</nuxt-link>
        <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/blog">BLOG</nuxt-link>
        <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/about">ABOUT ME</nuxt-link>
        <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/portfolio">PORTFOLIO</nuxt-link>
        <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/contact">CONTACT ME</nuxt-link>
    </div>
    <div class="flex flex-row justify-center items-center bg-gray-200 w-full h-20 fixed bottom-0">
      <p> &copy; 2020 Dhaval Prajapati </p>
    </div>
  </div>
</template>

<script>
  
</script>