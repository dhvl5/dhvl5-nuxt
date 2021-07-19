<template>
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

      fetch("https://formsubmit.co/ajax/prajapatidhaval304@gmail.com", { body: formData, method: "post" })
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
.socials {
  margin-top: 45px;
}
</style>