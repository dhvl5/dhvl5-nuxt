<template>
  <section class="flex flex-col w-full h-full bg-gray-900 theme-bg">
    <main class="h-full w-full divide-y-2 divide-white divide-opacity-25">
      <div class="mt-40 sm:mt-10 md:mt-10 lg:mt-10 xl:mt-24 w-full flex px-5 py-12 sm:py-24 items-center flex-col">
        <div class="lg:flex-grow md:w-auto flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-white">
          <h3 class="mb-8">HOWDY-DOODY!</h3>
          <h1 class="title-font text-5xl sm:text-6xl lg:text-7xl mb-8 font-medium text-white leading-none">I am
            <br class="hidden lg:inline-block"><p class="text-green-700">Dhaval Prajapati.</p>
          </h1>
          <p class="mb-8 text-xl leading-relaxed">a passionate self-made game developer <br>who loves coding and making cool stuff with it.</p>
          <div class="flex justify-center">
            <nuxt-link to="/contactme" class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg transform ease-in-out duration-200">Say 'hi'</nuxt-link>
            <a href="/Dhaval_Prajapati.pdf" target="_blank" class="inline-flex text-white border border-green-500 ml-2 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg transform ease-in-out duration-200">Download CV</a>
          </div>
        </div>
        <div class="mt-20 md:mt-40 lg:mt-28 xl:mt-20 w-full h-64 flex justify-center items-center">
          <a href="#aboutme">
            <svg class="animate-bounce mt-4 ml-4 w-10 h-10 text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
      <div id="aboutme" class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 pb-16 text-white flex justify-center">About Me</h1>
        <img class="lg:w-3/12 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-md" src="me.jpg">
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Hey, it's me again!</h1>
          <p class="leading-relaxed mb-8 text-white">I've always loved games more than anything, with many great ideas that I'd like to pursue. I started working as a Data Entry Clerk while pursuing my studies further, It was a character building experience from which I learned a lot about aligning my true goals. Since then, I've completed an internship and taught myself Unity3d within a few months, I am currently working within the industry and am actively creating 2D, 3D, and AR apps/games.</p>
        </div>
      </div>
      <div id="experience" class="container px-5 py-24 mx-auto">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 pb-16 text-white flex justify-center">Experience</h1>
        <div class="my-8">
          <div class="py-8 flex flex-wrap md:flex-no-wrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="tracking-widest font-medium title-font text-white">Unity Developer</span>
              <span class="mt-1 text-gray-600 text-sm">JUNE 2020 - PRESENT</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-white title-font mb-2">The Intellify</h2>
              <p class="leading-relaxed text-white">- Create games and augmented reality applications<br>- Identify process and application bottlenecks and bugs<br>- Design, build, and maintain efficient, reusable, and reliable code<br>- Ensure the best performance, quality, and responsiveness of applications</p>
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
              <span class="tracking-widest font-medium title-font text-white">Unity Developer</span>
              <span class="mt-1 text-gray-600 text-sm">APRIL 2018 - APRIL 2020</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-white title-font mb-2">CreArt Solutions</h2>
              <p class="leading-relaxed text-white">- Create games and augmented reality applications<br>- Identify process and application bottlenecks and bugs<br>- Teach game and android development<br>- Create and distribute educational content (notes, summaries, assignments etc.)<br>- Develop and enrich professional skills and knowledge by attending seminars, conferences etc.</p>
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
              <span class="tracking-widest font-medium title-font text-white">Data Entry Clerk</span>
              <span class="mt-1 text-gray-600 text-sm">DECEMBER 2017 - MARCH 2018</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-white title-font mb-2">Anand Tradelink Pvt. Ltd.</h2>
              <p class="leading-relaxed text-white"> - Create bills, quotations based on orders and continuous communication with clients.</p>
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
      <div id="contactme" class="container px-5 pt-24 xl:py-24 mx-auto h-full">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Me</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Although I'm not looking for any new opportunities but my inbox is always open. If you have a question or just want to say hi, I'll try my best to get back to you!</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2 justify-center">
        <div class="p-2 w-1/2">
          <input id="nameInput" v-model="form.name" class="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-green-500 text-base px-4 py-2" placeholder="Name" type="text" name="name" required>
        </div>
        <div class="p-2 w-1/2">
          <input id="emailInput" v-model="form.email" class="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-green-500 text-base px-4 py-2" placeholder="Email" type="email" name="email" pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required>
        </div>
        <div class="p-2 w-full">
          <textarea id="msgInput" v-model="form.msg" class="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none h-48 focus:border-green-500 text-base px-4 py-2 resize-none block" placeholder="Message" name="message" required></textarea>
        </div>
        <div id="errorAlert" class="bg-red-100 hidden border border-red-400 text-red-700 p-2 w-full rounded relative" role="alert">
          <strong class="font-bold">Nah!</strong>
          <span class="sm:inline">All fields are required.</span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-2">
            <svg @click="hideError" class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span>
        </div>
        <div id="emailAlert" class="bg-red-100 hidden border border-red-400 text-red-700 p-2 w-full rounded relative" role="alert">
          <strong class="font-bold">Oops!</strong>
          <span class="sm:inline">It seems that's not a correct mail id.</span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-2">
            <svg @click="hideEmail" class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span>
        </div>
        <div id="successAlert" class="bg-green-100 hidden border border-green-400 text-green-700 p-2 w-full rounded relative" role="alert">
          <strong class="font-bold">Thanks!</strong>
          <span class="sm:inline">I'll get back to you ASAP.</span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-2">
            <svg @click="hideSuccess" class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span>
        </div>
        <div class="mt-12 p-2 w-full">
          <button @click="submitForm" class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg transform ease-in-out duration-200">Submit</button>
        </div>
        <div class="socials w-full border-t border-gray-800 text-center">
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
    </main>
  </section>
</template>

<script>
var mailMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        msg: ""
      },
    }
  },
  methods: {
    submitForm() {
      if(document.getElementById('nameInput').value == '') { this.showError(); return; }
      if(document.getElementById('emailInput').value == '') { this.showError(); return; }
      if(document.getElementById('msgInput').value == '') { this.showError(); return; }
      if(!document.getElementById('emailInput').value.match(mailMatch))
      { this.showEmailError(); return; }

      let formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("email", this.form.email);
      formData.append("message", this.form.msg);

      fetch("https://formsubmit.co/ajax/1dc5ba99771cc1adddac27ed901cb0e7", { body: formData, method: "post" })
      .then(response => response.status)
      .then(data => { if(data == 200) { this.showSuccess(); } });

      document.getElementById('nameInput').value = '';
      document.getElementById('emailInput').value = '';
      document.getElementById('msgInput').value = '';
      document.getElementById('errorAlert').style.display = "none";
      document.getElementById('emailAlert').style.display = "none";
    },
    hideError() {
      document.getElementById('errorAlert').style.display = "none";
    },
    showError() {
      document.getElementById('errorAlert').style.display = "block";
    },
    showEmailError() {
      document.getElementById('emailAlert').style.display = "block";
    },
    hideEmail() {
      document.getElementById('emailAlert').style.display = "none";
    },
    hideSuccess() {
      document.getElementById('successAlert').style.display = "none";
    },
    showSuccess() {
      document.getElementById('successAlert').style.display = "block";
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
}

.socials {
  margin-top: 45px;
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