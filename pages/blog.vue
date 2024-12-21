<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";

const POSTS_QUERY = groq`*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const { data: posts } = await useSanityQuery<SanityDocument[]>(POSTS_QUERY);
</script>

<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>Sanity Blog</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Sanity Blog</ion-title>
                </ion-toolbar>
            </ion-header>
            <div id="container">
                <!-- sanity posts -->
                <div id="blog">
                    <ul class="flex flex-col gap-y-4">
                        <li v-for="post in posts" :key="post._id" class="hover:underline">
                            <nuxt-link :to="`/${post.slug.current}`">
                                <h2 class="text-xl font-semibold">{{ post.title }}</h2>
                                <p>{{ new Date(post.publishedAt).toLocaleDateString() }}</p>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <ion-button router-link="/">Back</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<style scoped>
#container {
    text-align: center;

    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

#container strong {
    font-size: 20px;
    line-height: 26px;
}

#container p {
    font-size: 16px;
    line-height: 22px;

    color: #8c8c8c;

    margin: 0;
}

#container a {
    text-decoration: none;
}
</style>