<template>

  <main class="theme-bg flex items-center justify-center select-none bg-background-primary text-text-text-color">
    <div class="flex flex-col justify-center items-center">

      <img class="transform ease-in-out duration-300 shadow-2xl rounded-full w-auto h-auto scale-78 hover:scale-75 hover:shadow-xs" src="~/assets/me.png"/>

      <p class="font-bold opacity-50">HOWDY-DOODY!</p>

      <p class="text-xl text-center mt-10"><span class="font-bold">I'm Dhaval Prajapati,</span><br> a passionate self-made game developer who loves coding and making cool stuff with it.</p>

      <div class="flex flex-row mt-20">
        <a class="w-40 h-12 mx-2 bg-transparent border-indigo-500 border-2 rounded-md font-bold flex justify-center items-center hover:bg-indigo-500 transform duration-300 ease-in-out" target="_blank" href="/dhvl5-nuxt/Dhaval_Prajapati.pdf">Download CV</a>
        <nuxt-link class="w-40 h-12 mx-2 bg-transparent border-indigo-500 border-2 rounded-md font-bold flex justify-center items-center hover:bg-indigo-500 transform duration-300 ease-in-out" to="/contact">Say 'hi'</nuxt-link>
      </div>

      <div class="flex flex-row mt-20">
        <a class="w-6 h-6 mx-2" target="_blank" href="https://www.linkedin.com/in/dhvl5/">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" class="transform duration-300 ease-in-out opacity-50 hover:opacity-100" style="font-size: 30px"/>
        </a>
        <a class="w-6 h-6 mx-2" target="_blank" href="https://twitter.com/dhvl05">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" class="transform duration-300 ease-in-out opacity-50 hover:opacity-100" style="font-size: 30px"/>
        </a>
        <a class="w-6 h-6 mx-2" target="_blank" href="https://github.com/dhvl5/">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }" class="transform duration-300 ease-in-out opacity-50 hover:opacity-100" style="font-size: 30px"/>
        </a>
      </div>

      <!-- <a href="" @click="anything">
        <img src="https://img.icons8.com/android/24/000000/circled-down-2.png" class="w-6 h-6 mb-10 absolute bottom-0">
      </a> -->

    </div>
  </main>

</template>

<script>
// export default {
//   data () {
//     return {
//       post: {}
//     }
//   },
//   methods:{
//     anything : function () {
//       alert('wow')
//     }
//   }
// }
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}*/

.page-enter-active, .page-leave-active {
  transition: all .25s ease-out;
}
.page-enter, .page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
</style>