<!-- <template>
  <section class="flex flex-col min-h-screen antialiased bg-background-primary select-none">
      <nav class="theme-bg h-12 flex justify-center items-center">
        <a class="absolute right-0 outline-none text-indigo-500 mx-16 font-bold hover:text-indigo-300 text" href="#" style="width: 25px" @click.prevent="toggleTheme" >
          <font-awesome-icon v-if="this.toggle" :icon="{ prefix: 'fas', iconName: 'sun' }" style="font-size: 30px"/>
          <font-awesome-icon v-else :icon="{ prefix: 'fas', iconName: 'moon' }" style="font-size: 30px"/>
        </a>
      </nav>
  </section>
</template> -->

<template>
  <nuxt class="flex-1" />
</template>

<!-- <script>
// const toggle = false
const theme = document.body

export default {
  data() {
    return {
      toggle: false
    }
  },
  created() {
    if (localStorage.getItem('toggle') === 'false') {
      this.toggle = false
      theme.classList.toggle('theme-dark', this.toggle)
    } else if (localStorage.getItem('toggle') !== 'false') {
      this.toggle = true
      theme.classList.toggle('theme-dark', this.toggle)
    } else {
      this.toggle = true
      theme.classList.toggle('theme-dark', this.toggle)
    }
  },
  methods: {
    toggleTheme() {
      this.toggle = !this.toggle
      theme.classList.toggle('theme-dark', this.toggle)
      localStorage.setItem('toggle', this.toggle)
    }
  }
}
</script> -->
