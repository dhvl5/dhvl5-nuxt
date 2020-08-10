<!-- <template>
  <main
    class="theme-bg flex items-center justify-center select-none bg-background-primary text-text-text-color"
  >
    <div class="flex flex-col justify-center items-center">
      <div class="flex flex-row mt-20">
        <a
          class="w-6 h-6 mx-2"
          target="_blank"
          href="https://www.linkedin.com/in/dhvl5/"
        >
          <font-awesome-icon
            :icon="{ prefix: 'fab', iconName: 'linkedin' }"
            class="transform duration-300 ease-in-out opacity-50 hover:opacity-100"
            style="font-size: 30px"
          />
        </a>
        <a
          class="w-6 h-6 mx-2"
          target="_blank"
          href="https://twitter.com/dhvl05"
        >
          <font-awesome-icon
            :icon="{ prefix: 'fab', iconName: 'twitter' }"
            class="transform duration-300 ease-in-out opacity-50 hover:opacity-100"
            style="font-size: 30px"
          />
        </a>
        <a
          class="w-6 h-6 mx-2"
          target="_blank"
          href="https://github.com/dhvl5/"
        >
          <font-awesome-icon
            :icon="{ prefix: 'fab', iconName: 'github' }"
            class="transform duration-300 ease-in-out opacity-50 hover:opacity-100"
            style="font-size: 30px"
          />
        </a>
      </div>
    </div>
  </main>
</template> -->

<template>
  <section class="flex flex-col w-full h-full bg-gray-900 theme-bg">
    <header class="text-gray-500 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> -->
          <span class="ml-3 text-xl text-text-text-color">DHVL5</span>
        </a>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#aboutme" class="mr-5 font-bold transform ease-in-out duration-200 hover:text-green-500">About Me</a>
          <a href="#experience" class="mr-5 font-bold transform ease-in-out duration-200 hover:text-green-500">Experience</a>
          <a href="#contactme" class="mr-5 font-bold transform ease-in-out duration-200 hover:text-green-500">Contact Me</a>
        </nav>
        <!-- <a href="#" class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" @click.prevent="toggleTheme">
          <p v-if="this.toggle">DARK</p>
          <p v-else>LIGHT</p>
        </a> -->
        <span class="inline-flex mt-4">
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
    </header>
    <main class="h-full w-full divide-y-2 divide-white divide-opacity-25">
      <div class="mt-0 sm:mt-10 md:mt-10 lg:mt-10 xl:mt-32 w-full flex px-5 py-24 items-center flex-col">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-text-text-color">
          <h3 class="mb-8">HOWDY-DOODY!</h3>
          <h1 class="title-font sm:text-7xl text-5xl mb-8 font-medium text-text-text-color leading-none">I am
            <br class="hidden lg:inline-block"><p class="text-green-700">Dhaval Prajapati.</p>
          </h1>
          <p class="mb-8 text-xl leading-relaxed">a passionate self-made game developer <br>who loves coding and making cool stuff with it.</p>
          <div class="flex justify-center">
            <a href="#contactme" class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Let's grab a coffee</a>
          </div>
        </div>
        <div class="pt-0 xl:pt-24 w-full h-64 flex justify-center items-center">
          <a href="#aboutme"><svg class="animate-bounce mt-4 ml-4 w-10 h-10 text-text-text-color" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg></a>
        </div>
      </div>
      <div id="aboutme" class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <!-- <p class="text-white text-2xl pb-16">About Me</p> -->
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 pb-16 text-text-text-color flex justify-center">About Me</h1>
        <img class="lg:w-3/12 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-md" alt="hero" src="me_main.jpg">
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-text-text-color">Hello it's me again!</h1>
          <p class="leading-relaxed mb-8 text-text-text-color">I've always loved games more than anything, I have so many ideas with so much potential. I want to create this and that and so on, but then I started working as a Data Entry Clerk while pursuing my studies further, those were some of the worst days ever. The job was killing me from inside before I decided to drop out of college to do what I actually wanted to do. Since then, I've completed an internship and taught myself Unity3D within a few months, I am currently working within the industry and am actively creating 2D, 3D and AR apps/games.</p>
        </div>
      </div>
      <div id="experience" class="container px-5 py-24 mx-auto">
        <!-- <p class="text-white text-2xl pb-16 flex justify-center">Experience</p> -->
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 pb-16 text-text-text-color flex justify-center">Experience</h1>
        <div class="my-8">
          <div class="py-8 flex flex-wrap md:flex-no-wrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="tracking-widest font-medium title-font text-text-text-color">Unity Developer</span>
              <span class="mt-1 text-gray-600 text-sm">JUNE 2020 - PRESENT</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-text-text-color title-font mb-2">The Intellify</h2>
              <p class="leading-relaxed text-text-text-color">- Creating virtual and augmented reality applications<br>- Building complex logic and problem solving</p>
              <a href="https://theintellify.com/" target="_blank" class="text-green-500 inline-flex items-center mt-4">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-no-wrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="tracking-widest font-medium title-font text-text-text-color">Unity Developer</span>
              <span class="mt-1 text-gray-600 text-sm">SEPTEMBER 2018 - APRIL 2020</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-text-text-color title-font mb-2">CreArt Solutions</h2>
              <p class="leading-relaxed text-text-text-color">- Creating games and augmented reality applications<br>- Building complex logic and problem solving<br>- Teaching game development</p>
              <a href="https://creart.in/" target="_blank" class="text-green-500 inline-flex items-center mt-4">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-no-wrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="tracking-widest font-medium title-font text-text-text-color">Data Entry Clerk</span>
              <span class="mt-1 text-gray-600 text-sm">MAY 2018 - SEPTEMBER 2018</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-text-text-color title-font mb-2">Anand Tradelink Pvt. Ltd.</h2>
              <p class="leading-relaxed text-text-text-color"> - Created bills, quotations based on orders and continuous communication with clients.</p>
              <a href="https://atpl.biz/" target="_blank" class="text-green-500 inline-flex items-center mt-4">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="contactme" class="container px-5 pt-24 xl:py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-text-text-color">Contact Me</h1>
          <!-- <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> -->
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <input class="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-green-500 text-base px-4 py-2" placeholder="Name" type="text">
            </div>
            <div class="p-2 w-1/2">
              <input class="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-green-500 text-base px-4 py-2" placeholder="Email" type="email">
            </div>
            <div class="p-2 w-full">
              <textarea class="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none h-48 focus:border-green-500 text-base px-4 py-2 resize-none block" placeholder="Message"></textarea>
            </div>
            <div class="mt-12 p-2 w-full">
              <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Submit</button>
            </div>
            <div class="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
              <!-- <a class="text-green-500">prajapatidhaval304@gmail.com</a><br>
              <p class="leading-normal my-5">49 Smith St.
                <br>Saint Cloud, MN 56301
              </p> -->
              <span class="inline-flex mt-4">
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
          </div>
        </div>
      </div>
      <dialog id="myModal" class="h-auto w-11/12 md:w-3/12 p-5 fixed bg-blue-900 rounded-md">
        <div class="flex flex-col w-full h-auto ">
          <!-- Header -->
          <div class="flex w-full h-auto justify-center items-center">
            <div class="flex w-10/12 h-auto py-3 justify-center items-center text-2xl text-gray-500 font-bold">
                  Made with
            </div>
            <div onclick="document.getElementById('myModal').close();" class="flex w-1/12 h-auto justify-center cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A0AEC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            <!--Header End-->
          </div>
            <!-- Modal Content-->
            <div class="flex w-full h-auto py-10 px-2 justify-center items-center bg-blue-900 rounded text-gray-500">
              <ul class="list-disc">
                <li>Nuxt.js</li>
                <li>TailwindCSS</li>
                <li>Font Awesome</li>
              </ul>
            </div>
            <!-- End of Modal Content-->
        </div>
      </dialog>
    </main>
    <footer class="text-gray-500 bg-background-primary body-font">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <!-- <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl">DHVL5</span>
        </a> -->
        <p class="text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">© 2020 Dhaval Prajapati</p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <button href="#" class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" onclick="document.getElementById('myModal').showModal()" id="btn">
          Made with
          </button>
        </span>
      </div>
    </footer>
  </section>
</template>

<script>
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
</script>

<style>
  dialog[open] {
  animation: appear .15s cubic-bezier(0, 1.8, 1, 1.8);
}

  dialog::backdrop {
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(54, 54, 54, 0.5));
    backdrop-filter: blur(3px);
  }
  
 
@keyframes appear {
  from {
    opacity: 0;
    transform: translateX(-3rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.25s ease-out;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
</style>