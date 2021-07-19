<template>
  <div class="center mx-auto mt-10">
    <article class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
      <h1 class="text-white">{{ post.title }}</h1>
      <span class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 block">
        {{ $dayjs(post.created_at).format('MMM DD, YYYY | hh:mma') }}
        <!-- <span v-for="(tag, index) in post.tags" :key="index">
          <span> {{ tag.name }} </span><span v-if="index+1 < post.tags.length">, </span>
        </span> -->
      </span>
      <div class="text-white" v-html="post.html">{{ post.html }}</div>
    </article>
  </div>
</template>

<script>
import { getSinglePost } from '~/api/posts';
export default {
  async asyncData ({params}) {
    const post = await getSinglePost(params.slug);
    post.html.replace("'", "");
    return { post: post }
  }
}
</script>

<style>
/* Custom Prose */
.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6 {
  color: #F9FAFB;
}

.prose a {
  color: #059669;
}
.prose a strong {
  color: #059669;
}

.prose a:hover {
  color: #34D399;
}
.prose a strong:hover {
  color: #34D399;
}

.prose strong {
  color: white;
}

.prose code{
  color: white;
  background-color: teal;
  border-radius: 3px;
}

.prose figure a{
  color: black;
  text-decoration: none;
}

.prose figure a:hover{
  color: black;
}

.prose img{
  margin: 0px;
}

.prose blockquote {
  color: grey;
}
.prose blockquote strong {
  color: grey;
}

/* Parent Main Card Class */
.kg-card {
  width: 100%;
}

/* Bookmark Card */
.kg-bookmark-card {
    width: 100%;
    position: relative;
    background-color: wheat;
    height: auto;
}

.kg-bookmark-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    color: currentColor;
    font-family: inherit;
    text-decoration: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
}

.kg-bookmark-content {
    flex-basis: 0;
    flex-grow: 999;
    padding: 20px;
    order: 1;
}

.kg-bookmark-title {
    font-weight: 700;
    font-size: 30px;
}

.kg-bookmark-metadata,
.kg-bookmark-description {
    margin-top: .5em;
    font-size: 15px;
}

.kg-bookmark-metadata {
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 50px;
}

.kg-bookmark-description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.kg-bookmark-icon {
    display: inline-block;
    width: 25px;
    height: 25px;
    vertical-align: bottom;
    margin-top: 0px;
    margin-bottom: 0px;
}

.kg-bookmark-thumbnail {
    display: flex;
    flex-basis: 24rem;
    flex-grow: 1;
}

.kg-bookmark-thumbnail img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    margin: 0px;
}

.kg-bookmark-author {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-left: 5px;
}

.kg-bookmark-publisher::before {
    content: "•";
    margin: 0 .5em;
}

/* Embed Card */
.kg-embed-card iframe {
  width: 100%;
  height: 500px;
}

.fluid-width-video-wrapper {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
}

.fluid-width-video-wrapper iframe,
.fluid-width-video-wrapper object,
.fluid-width-video-wrapper embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>