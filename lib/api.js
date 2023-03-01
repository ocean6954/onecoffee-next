import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
})

// export async function getPostBySlug(slug, limit = 20) {
//   try {
//     const post = await client.get({
//       endpoint: 'coffee-images',
//       queries: { filters: `slug[equals]${slug}` },
//       limit: 20,
//     })
//     return post.contents[0]
//   } catch (err) {
//     console.log('--getPostBySlug--')
//     console.log(err)
//   }
// }

export async function getAllPosts(limit = 100) {
  try {
    const posts = await client.get({
      endpoint: 'coffees',
      queries: {
        fields: 'eyecatch,title,slug,category,id,content',
        orders: 'createdAt',
        limit: limit,
      },
    })
    // console.log(posts)
    // console.log(posts.category)
    return posts.contents
  } catch (err) {
    console.log('~~ getAllPosts ~~')
    console.log(err)
  }
}
