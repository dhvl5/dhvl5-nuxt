<template>
  <section class="flex flex-col min-h-screen antialiased bg-background-primary select-none">
    <header class="theme-bg p-4 bg-background-secondary">
      <nav class="theme-bg flex justify-center">
          <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/">HOME</nuxt-link>
          <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/blog">BLOG</nuxt-link>
          <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/about">ABOUT ME</nuxt-link>
          <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/portfolio">PORTFOLIO</nuxt-link>
          <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/contact">CONTACT ME</nuxt-link>
          <a @click.prevent="toggleTheme" class="absolute right-0 outline-none text-indigo-500 mx-16 font-bold hover:text-indigo-300 text" href="#" style="width: 25px">
            <font-awesome-icon v-if="this.toggle" :icon="{ prefix: 'fas', iconName: 'sun' }" style="font-size: 30px"/>
            <font-awesome-icon v-else :icon="{ prefix: 'fas', iconName: 'moon' }" style="font-size: 30px"/>
          </a>
      </nav>
    </header>
    <nuxt class="flex-1"/>
    <footer class="theme-bg text-center bg-background-secondary p-2 text-text-text-color">
      <p> &copy; 2020 Dhaval Prajapati</p>
    </footer>
  </section>
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