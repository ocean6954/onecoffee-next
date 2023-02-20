/** @jsxImportSource @emotion/react */

import { css, jsx } from '@emotion/react'

import styles from 'styles/posts.module.css'
import Image from 'next/image'

export default function Posts({ posts }) {
  const style = (color) =>
    css`
      &:hover {
        background-color: ${color};
        opacity: 0.5;
      }
    `

  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, eyecatch, slug, category }) => (
        <div css={[style(slug)]}>
          <figure>
            <Image
              src={eyecatch.url}
              alt=""
              layout="fixed"
              width={eyecatch.width}
              height={eyecatch.height}
              placeholder="blur"
              blurDataURL={eyecatch.blurDataURL}
            />
          </figure>
          <h2 className={styles.name}>{category.name}</h2>
        </div>
      ))}
    </div>
  )
}
