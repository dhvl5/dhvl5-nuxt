<template>
  <div class="theme-bg bg-background-primary">
    <nuxt/>
    <div class="theme-bg flex flex-row justify-center items-center bg-background-secondary w-full h-20 fixed top-0">
        <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/">HOME</nuxt-link>
        <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/blog">BLOG</nuxt-link>
        <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/about">ABOUT ME</nuxt-link>
        <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/portfolio">PORTFOLIO</nuxt-link>
        <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/contact">CONTACT ME</nuxt-link>
        <a @click.prevent="toggleTheme" class="fixed right-0 outline-none text-indigo-500 mx-16 font-bold hover:text-indigo-300 text" href="#" style="width: 25px">
          <font-awesome-icon v-if="this.toggle" :icon="{ prefix: 'fas', iconName: 'sun' }" style="font-size: 30px"/>
          <font-awesome-icon v-else :icon="{ prefix: 'fas', iconName: 'moon' }" style="font-size: 30px"/>
        </a>
    </div>
    <div class="theme-bg flex flex-row justify-center items-center bg-background-secondary w-full h-20 fixed bottom-0 text-text-text-color">
      <p> &copy; 2020 Dhaval Prajapati</p>
    </div>
  </div>
</template>

<script>
  var toggle = false;
  var theme = document.body;

  export default {
    created() {
      if(localStorage.getItem('toggle') === 'false')
      {
        this.toggle = false;
        theme.classList.toggle("theme-dark", this.toggle);
      }
      else if(localStorage.getItem('toggle') !== 'false')
      {
        this.toggle = true;
        theme.classList.toggle("theme-dark", this.toggle);
      }
      else
      {
        this.toggle = true;
        theme.classList.toggle("theme-dark", this.toggle);
      }
    },
    data() {
      return {
        toggle: false
      }
    },
    methods: {
      toggleTheme() {
        this.toggle = !this.toggle;
        theme.classList.toggle("theme-dark", this.toggle);
        localStorage.setItem('toggle', this.toggle);
      }
    }
  }
</script>