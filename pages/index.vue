<template>
  <div>
    <div>
      <main>
        <ul>
          <div class="container px-5 py-24 mx-auto">
            <div>
              <div class="p-4 grid xl:grid-cols-3 md:grid-cols-2 gap-4">
                <li class="mb-0 h-full border-2 border-gray-800 rounded-lg transition duration-500 hover:border-white bg-gray-800" v-for="(post, index) in posts" :key="index">
                  <nuxt-link :to="{ name: 'slug', params: { slug: post.slug } }">
                    <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-md" :src="post.feature_image">
                    <div class="p-6">
                      <div class="content">
                        <span class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 block">
                          {{ $dayjs(post.created_at).format('MMM DD, YYYY | hh:mma') }}
                        </span>
                        <p class="title-font text-xl font-medium text-white">{{ post.title }}</p>
                        <p class="leading-relaxed text-gray-400 mt-2 line-clamp-3">{{ post.excerpt }}</p>
                      </div>
                    </div>
                  </nuxt-link>
                </li>
              </div>
            </div>
          </div>
        </ul>
      </main>
      <!-- component -->
      <!-- This is an example component -->
      <div class="flex justify-center">
        <ul class="flex pl-0 list-none rounded my-2" v-for="(page, index) in meta.pages" :key="index">
          <li class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200">
            <button class="page-link" @click="lol">{{ page }}</button>
          </li>
          <!-- <li class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"><a class="page-link" href="#">1</a></li>
          <li class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"><a class="page-link" href="#">2</a></li>
          <li class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"><a class="page-link" href="#">3</a></li>
          <li class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200"><a class="page-link" href="#">Next</a></li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getPosts } from '~/api/posts';
import { getMeta } from '~/api/posts';

export default {
  async asyncData () {
    const meta = await getMeta();
    const posts = await getPosts(1);
    alert(sessionStorage.getItem('pageNumber'));

    return {
      posts, meta,
    }
  }
}
</script>