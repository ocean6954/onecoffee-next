import Hero from 'components/hero'
import Container from 'components/container'
import Coffees from 'components/coffees'
import { getAllPosts, getPostBySlug } from 'lib/api'
import Posts from 'components/posts'
import { getPlaiceholder } from 'plaiceholder'

export default function Coffee({ posts }) {
  return (
    <Container>
      <Hero title={' Coffees'} subtitle={'一覧だよ'} />
      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  // const post = await getPostBySlug('ワンブレンドハイ')
  for (const post of posts) {
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }
  return {
    props: {
      posts: posts,
    },
  }
}
