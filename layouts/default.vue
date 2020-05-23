<template>
  <section class="flex flex-col min-h-screen antialiased bg-background-primary select-none">
    <header class="theme-bg p-4 bg-background-secondary">
      <nav class="theme-bg flex justify-center">
          <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/">HOME</nuxt-link>
          <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/blog">BLOG</nuxt-link>
          <nuxt-link class="outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/about">ABOUT ME</nuxt-link>
          <!-- <nuxt-link class="hoverable outline-none text-indigo-500 mx-16 font-bold transform ease-in-out duration-300 hover:text-indigo-300 text" to="/portfolio">PORTFOLIO</nuxt-link> -->
          <div class="hoverable text-indigo-500 hover:text-indigo-300">
            <a href="#" class="mx-16 bg-black outline-none relative block text font-bold transform ease-in-out duration-300">PORTFOLIO</a>
            <div class="mega-menu mt-4 h-64 z-10 shadow-xl bg-teal-700">
              <div class="w-full h-full">
                <div class="grid grid-cols-3 w-full h-full text-white">
                  <div class="unitydiv flex items-center justify-center transform duration-300 ease-in-out" style="background-image: url('https://unity.com/sites/default/files/styles/16_9_l_scale_width/public/2019-07/mwu-12_12-1230x692%402x.jpg?itok=brBloUfr');">
                    <nuxt-link to="/unity" class="unitylogo flex flex-col justify-center items-center w-full h-full transform duration-300 ease-in-out">
                      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'unity' }"/>
                      <p class="text-4xl">Unity</p>
                    </nuxt-link>
                  </div>
                  <div class="androiddiv flex items-center justify-center transform duration-300 ease-in-out" style="background-image: url('https://images.unsplash.com/photo-1541345023926-55d6e0853f4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');">
                    <nuxt-link to="/android" class="androidlogo flex flex-col justify-center items-center w-full h-full transform duration-300 ease-in-out">
                      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'android' }"/>
                      <p class="text-4xl">Android</p>
                    </nuxt-link>
                  </div>
                  <div class="webdiv flex items-center justify-center transform duration-300 ease-in-out" style="background-image: url('https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');">
                    <nuxt-link to="/web" class="weblogo flex flex-col justify-center items-center w-full h-full transform duration-300 ease-in-out">
                      <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'laptop-code' }"/>
                      <p class="text-4xl">Web</p>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

<style>

/* PORTFOLIO HOVER  */
  .mega-menu {
    display: none;
    position: absolute;
    left: 0;
    text-align: left;
    width: 100%;
  }

  .hoverable {
    position: static;
  }

  .hoverable > a:after {
    content: "\25BC";
    font-size: 10px;
    padding-left: 6px;
    position: relative;
    top: -1px;
  }

  .hoverable:hover .mega-menu {
    display: block;
  }


/* PORTFOLIO */
.unitydiv {
   background-size: cover;
   background-position: top;
   filter: grayscale(100%);
}
.unitydiv:hover {
  filter: grayscale(0%);
  background-position: left 0px bottom -70px;
}
.unitylogo {
  font-size: 70px;
}
.unitylogo:hover {
  font-size: 100px;
}

.androiddiv {
   background-size: cover;
   background-position: top;
   filter: grayscale(100%);
}
.androiddiv:hover {
  filter: grayscale(0%);
  background-position: left 0px bottom -135px;
}
.androidlogo {
  font-size: 70px;
}
.androidlogo:hover {
  font-size: 100px;
}

.webdiv {
   background-size: cover;
   background-position: top;
   filter: grayscale(100%);
}
.webdiv:hover {
  filter: grayscale(0%);
  background-position: left 0px bottom -135px;
}
.weblogo {
  font-size: 70px;
}
.weblogo:hover {
  font-size: 100px;
}
</style>

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