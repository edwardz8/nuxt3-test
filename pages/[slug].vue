<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;

const { params } = useRoute();

const { data: post } = await useSanityQuery<SanityDocument>(POST_QUERY, params);

const { projectId, dataset } = useSanity().client.config();

const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;
</script>

<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>Sanity Single Blog Post</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Sanity Single Blog Post</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content id="container">
                <!-- sanity single post -->

                <main v-if="post" class="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
                    <a href="/" class="hover:underline">&larr; Back to posts</a>
                    <img v-if="post.image" :src="urlFor(post.image).width(550).height(310).url()" :alt="post?.title"
                        class="aspect-video rounded-xl" width="550" height="310" />
                    <h1 v-if="post.title" class="text-4xl font-bold mb-8">{{ post.title }}</h1>
                    <div class="prose">
                        <p v-if="post.publishedAt">
                            Published: {{ new Date(post.publishedAt).toLocaleDateString() }}
                        </p>
                        <SanityContent v-if="post.body" :blocks="post.body" />
                    </div>
                </main>

                <ion-button router-link="/">Back</ion-button>
            </ion-content>
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