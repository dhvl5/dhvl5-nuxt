<template>
  <div class="flex flex-col w-full min-h-screen bg-gray-900">
    <!-- <header class="text-gray-500 body-font">
      <div class="container p-5 mx-auto flex flex-wrap flex-row md:flex-row items-center">
        <nuxt-link to="./" class="flex title-font font-medium items-center text-white mb-0 md:mb-0">
          <img class="w-10 h-10 text-white bg-green-500 rounded-full" src="logo.png"/>
          <span class="ml-3 text-xl text-white">Dhaval Prajapati</span>
        </nuxt-link>
        <nav class="mr-auto ml-4 py-1 pl-4 border-l border-gray-700	flex flex-wrap items-center text-base justify-center">
          <nuxt-link to="/aboutme" class="mr-5 font-bold transform ease-in-out duration-200 hover:text-green-500">ABOUT</nuxt-link>
          <nuxt-link to="/contactme" class="mr-5 font-bold transform ease-in-out duration-200 hover:text-green-500">CONTACT</nuxt-link>
        </nav>
        <span class="inline-flex">
          <a href="https://github.com/dhvl5/" target="_blank" class="text-gray-500">
            <font-awesome-icon class="text-gray-500 transform ease-in-out duration-200 hover:text-white text-2xl" style="width:25px; height:25px" :icon="{ prefix: 'fab', iconName: 'github' }"/>
          </a>
          <a href="https://www.linkedin.com/in/dhvl5/" target="_blank" class="ml-4 text-gray-500">
            <font-awesome-icon class="text-gray-500 transform ease-in-out duration-200 hover:text-white text-2xl" style="width:25px; height:25px" :icon="{ prefix: 'fab', iconName: 'linkedin' }"/>
          </a>
          <a href="https://twitter.com/dhvl05" target="_blank" class="ml-4 text-gray-500">
            <font-awesome-icon class="text-gray-500 transform ease-in-out duration-200 hover:text-white text-2xl" style="width:25px; height:25px" :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
          </a>
        </span>
      </div>
    </header> -->

    <div class="bg-gray-900">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <div class="flex items-center">
            <a href="/" aria-label="Company" class="inline-flex items-center mr-8">
              <nuxt-link to="./" class="flex title-font font-medium items-center md:justify-start justify-center text-white">
                <img class="w-10 h-10 text-white bg-green-500 rounded-full sm:block" src="logo.png"/>
                <!-- <span class="ml-3 text-xl">DHVL5</span> -->
              </nuxt-link>
            </a>
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <li>
                <a href="#aboutme" aria-label="About" class="font-medium tracking-wide text-green-500 transition-colors duration-200 hover:text-teal-accent-400">
                    About</a>
              </li>
              <li>
                <a href="#contactme" aria-label="Contact" class="font-medium tracking-wide text-green-500 transition-colors duration-200 hover:text-teal-accent-400">
                    Contact</a>
              </li>
            </ul>
          </div>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <span class="inline-flex mt-1">
              <a href="https://github.com/dhvl5/" target="_blank">
                <font-awesome-icon class="text-gray-500 transform ease-in-out duration-200 hover:text-white text-2xl" style="width:25px; height:25px" :icon="{ prefix: 'fab', iconName: 'github' }"/>
              </a>
              <a href="https://www.linkedin.com/in/dhvl5/" target="_blank" class="ml-4">
                <font-awesome-icon class="text-gray-500 transform ease-in-out duration-200 hover:text-white text-2xl" style="width:25px; height:25px" :icon="{ prefix: 'fab', iconName: 'linkedin' }"/>
              </a>
              <a href="https://twitter.com/dhvl05" target="_blank" class="ml-4">
                <font-awesome-icon class="text-gray-500 transform ease-in-out duration-200 hover:text-white text-2xl" style="width:25px; height:25px" :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
              </a>
            </span>
          </ul>
          <div class="lg:hidden">
            <button aria-label="Open Menu" class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline" @click="isMenuOpen = true">
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
                <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"></path>
              </svg>
            </button>
            <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
              <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <a href="/" aria-label="Company" class="inline-flex items-center">
                      <nuxt-link to="./" class="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <img class="w-10 h-10 text-white bg-green-500 rounded-full hidden sm:block" src="logo.png"/>
                        <!-- <span class="ml-3 text-xl">DHVL5</span> -->
                      </nuxt-link>
                    </a>
                  </div>
                  <div>
                    <button aria-label="Close Menu" class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" @click="isMenuOpen = false">
                      <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z">
                        </path>
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                      <a href="/aboutme" aria-label="About" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">About</a>
                    </li>
                    <li>
                      <a href="/contactme" aria-label="Contact" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Contact</a>
                    </li>
                    <li>
                      <span class="inline-flex mt-1">
                        <a href="https://github.com/dhvl5/" target="_blank">
                          <font-awesome-icon class="text-gray-500 transform ease-in-out duration-200 hover:text-black text-2xl" style="width:25px; height:25px" :icon="{ prefix: 'fab', iconName: 'github' }"/>
                        </a>
                        <a href="https://www.linkedin.com/in/dhvl5/" target="_blank" class="ml-4">
                          <font-awesome-icon class="text-gray-500 transform ease-in-out duration-200 hover:text-black text-2xl" style="width:25px; height:25px" :icon="{ prefix: 'fab', iconName: 'linkedin' }"/>
                        </a>
                        <a href="https://twitter.com/dhvl05" target="_blank" class="ml-4">
                          <font-awesome-icon class="text-gray-500 transform ease-in-out duration-200 hover:text-black text-2xl" style="width:25px; height:25px" :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
                        </a>
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nuxt class="flex-1" />

    <footer class="text-gray-500 bg-gray-900 body-font">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <nuxt-link to="./" class="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <img class="w-10 h-10 text-white bg-green-500 rounded-full hidden sm:block" src="logo.png"/>
          <!-- <span class="ml-3 text-xl">DHVL5</span> -->
        </nuxt-link>
        <p class="text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">&copy; 2021 Dhaval Prajapati</p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          Made with &nbsp;
          <font-awesome-icon class="text-red-600" style="margin-top: 3px; width:18px; height:18px" :icon="{ prefix: 'fas', iconName: 'heart' }"/>
          &nbsp; in India
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>