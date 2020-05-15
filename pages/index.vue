<template>

  <div class="w-full h-full select-none">
    <div class="flex flex-col h-screen justify-center items-center">

      <img class="transform ease-in-out duration-300 shadow-2xl rounded-full w-auto h-auto scale-75 hover:shadow-xs" src="~/assets/me.png"/>

      <p class="text-xl text-center mt-10"><span class="text-black font-bold">I'm Dhaval Prajapati,</span><br> a passionate self-made game developer who loves coding and making cool stuff with it.</p>

      <!-- <a href="" @click="anything">
        <img src="https://img.icons8.com/android/24/000000/circled-down-2.png" class="w-6 h-6 mb-10 absolute bottom-0">
      </a> -->

    </div>

  </div>

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