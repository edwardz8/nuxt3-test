# Nuxt - Ionic - Sanity Minimal Blog Starter

## Known Routing Issue

I'm running into an issue with dynamic routing in a Nuxt 3, Ionic and Sanity project. I have a live test project in production:

Repo: https://github.com/edwardz8/nuxt3-test 
Live Test Site: https://nuxt3-test-lilac-delta.vercel.app/

When attempting to go to a single route param on this page: https://nuxt3-test-lilac-delta.vercel.app/blog 

I get the following error: 

GET https://2mnyaa05.apicdn.sanity.io/v1/data/query/production?query=*%5B_type+%3D%3D+%22post%22+%26%26+slug.current+%3D%3D+%24slug%5D%5B0%5D&returnQuery=false&perspective=raw 400 (Bad Request) 

"error": {"description": "param $slug referenced, but not provided",
"end": 41,
"query": "*[_type == \"post\" && slug.current == $slug][0]",
"start": 37,
"type": "queryParseError"
}

Blocked aria-hidden on an element because its descendant retained focus. The focus must not be hidden from assistive technology users. Avoid using aria-hidden on a focused element or its ancestor. Consider using the inert attribute instead, which will also prevent focus

I'm not sure if all of the above errors are related or what's going on/what I'm missing.

I know i'm not supposed to be using nuxt-link within ionic but even when i use ionic's router-link, it still doesn't work so nuxt-link is not the root issue. 

Any direction would be appreciated. 

------------
------------

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
