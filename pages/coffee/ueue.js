import { client } from 'lib/api'
import { getPostBySlug } from 'lib/api'
import Image from 'next/image'

export default function Ueue({ coffee }) {
  return (
    <figure>
      <Image
        src={coffee.url}
        alt=""
        layout="fixed"
        width={coffee.width}
        height={coffee.height}
        sizes="(min-width: 1152px) 250px, 30vw"
        priority
      />
    </figure>
  )
}

export async function getStaticProps() {
  const slug = 'ウガンダ アフリカン ドンキー'

  const post = await getPostBySlug(slug)
  console.log(post)

  return {
    props: {
      coffee: post.coffee,
    },
  }
}
