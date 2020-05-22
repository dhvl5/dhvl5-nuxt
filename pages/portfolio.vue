<template>
    <main class="theme-bg flex justify-center select-none bg-background-primary text-text-text-color box-border">
        <div class="grid grid-cols-3 w-full">
          <a href="#" class="unitybg flex items-center justify-center transform duration-300 ease-in-out" style="background-image: url('https://unity.com/sites/default/files/styles/16_9_l_scale_width/public/2019-07/mwu-12_12-1230x692%402x.jpg?itok=brBloUfr');">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'unity' }"/>
          </a>
          <a href="#" class="androidbg flex items-center justify-center transform duration-300 ease-in-out" style="background-image: url('https://file.mockplus.com/image/2019/12/ddab29eb-bfec-48fe-8eaf-f09f625fefae.png');">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'android' }"/>
          </a>
          <a href="#" class="webbg flex items-center justify-center transform duration-300 ease-in-out">
            <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'laptop-code' }"/>
          </a>
        </div>
    </main>
</template>

<style>
.page-enter-active, .page-leave-active {
  transition: all .25s ease-out;
}
.page-enter, .page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
.unitybg {
   background-size: cover;
   background-position: right;
   filter: grayscale(100%);
   font-size: 150px;
}
.unitybg:hover {
  filter: grayscale(0%);
  font-size: 200px;
}
.androidbg {
   background-size: cover;
   background-position: right;
   filter: grayscale(100%);
   font-size: 150px;
}
.androidbg:hover {
  filter: grayscale(0%);
  font-size: 200px;
}

.webbg {
   background-size: cover;
   background-position: right;
   filter: grayscale(100%);
   font-size: 150px;
}
.webbg:hover {
  filter: grayscale(0%);
  font-size: 200px;
}
</style>