/** @jsxImportSource @emotion/react */

import { css, jsx } from '@emotion/react'
import { useState } from 'react'
import Image from 'next/image'
import styles from 'styles/posts.module.css'
import Character from 'components/character'
import { defaultImage } from 'images/eyecatch.jpg'

export default function Posts({ posts }) {
  const [isActive, setIsActive] = useState(false)
  const [color, setColor] = useState()
  const [characterImage, setCharacterImage] = useState({ defaultImage })
  const [imageStyle, setImageStyle] = useState()

  const style = css`
    &:hover {
      background-color: ${color};
      opacity: 0.5;
      width: 100vw;
    }
  `

  const bg = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${color};
    z-index: 20;
    animation: bgOpenAnime 0.3s forwards;
    @keyframes bgOpenAnime {
      /* フェードイン */
      0% {
        opacity: 0;
      }
      100% {
        opacity: 0.7;
      }
    }
  `

  return (
    <>
      <div className={isActive ? styles.modalOpen : styles.modal_bg}>
        <div css={bg} onClick={() => setIsActive((prev) => !prev)}>
          <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            <Character eyecatch={characterImage} />
            {/* <button onClick={() => setIsActive(false)}>閉じる</button> */}
          </div>
        </div>
      </div>
      <div className={styles.gridContainer}>
        {posts.map(({ title, eyecatch, slug, category, id }) => (
          <figure>
            {/* {console.log(id)} */}
            <div className={styles.fit} id={id}>
              <Image
                src={eyecatch.url}
                alt=""
                layout="fixed"
                width={eyecatch.width}
                height={eyecatch.height}
                placeholder="blur"
                blurDataURL={eyecatch.blurDataURL}
                onClick={() => (
                  setIsActive((prev) => !prev),
                  setColor(slug),
                  setCharacterImage(eyecatch)
                )}
                // className={isActive ? styles.moveImage : styles.fit}
              />
            </div>

            <h2 className={styles.name}>{category.name}</h2>
          </figure>
        ))}
      </div>
    </>
  )
}
