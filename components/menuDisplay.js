import styles from 'styles/menuDisplay.module.css'
import Link from 'next/link'
import Image from 'next/image'
import icon from 'images/icon.png'
import Container from 'components/container'
import { useState } from 'react'
import Modal from 'components/modal'

/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import Character from 'components/character'
import { defaultImage } from 'images/eyecatch.jpg'
import ConvertBody from '/components/convert-body'
import {
  CoffeeCup,
  Tea,
  Ueue,
  Santos,
  Splemo,
  Maruta,
  Geisha,
  Frame,
  TestIcon,
  Test2,
} from './iconSVG'

export default function MenuDisplay(props) {
  const [modal, setModal] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [color, setColor] = useState()
  const [characterImage, setCharacterImage] = useState({ defaultImage })
  const [imageStyle, setImageStyle] = useState()
  const [content, setContent] = useState('')
  const { posts } = props
  const style = css`
    &:hover {
      background-color: ${color};
      opacity: 0.5;
      width: 100vw;
    }
  `

  const modalContent = css`
    z-index: 3;
    max-width: 700px;
    width: 70%;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: ${color};
    animation: bgOpenAnime 0.3s forwards;
    @keyframes bgOpenAnime {
      /* フェードイン */
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `
  return (
    <>
      {props.modalNumber === 1 && (
        <div className={styles.menuArea}>
          <div className={styles.display}>
            <ul>
              <li className={styles.overlayItem}>
                <CoffeeCup />
                <span>ホットコーヒー</span>
              </li>
              <li className={styles.overlayItem}>
                <Tea />
                <span>ホットティー</span>
              </li>
            </ul>
          </div>
        </div>
      )}
      {props.modalNumber === 2 && (
        <div className={styles.menuArea}>
          <div className={styles.display}>
            <div className={isActive ? styles.modalOpen : styles.modal_bg}>
              <div
                className={styles.modalWindow}
                onClick={() => setIsActive((prev) => !prev)}
              >
                <div css={modalContent} onClick={(e) => e.stopPropagation()}>
                  <Character eyecatch={characterImage} />
                  <ConvertBody contentHTML={content} />
                </div>
              </div>
            </div>
            <ul>
              {posts.map(({ title, eyecatch, slug, category, id, content }) => (
                <li>
                  {/* <figure>
                    <Image
                      src={eyecatch.url}
                      alt=""
                      layout="fixed"
                      // width={eyecatch.width}
                      width={20}
                      height={20}
                      // height={eyecatch.height}
                      placeholder="blur"
                      blurDataURL={eyecatch.blurDataURL}
                      onClick={() => (
                        setIsActive((prev) => !prev),
                        setColor(slug),
                        setCharacterImage(eyecatch),
                        setContent(content)
                      )}
                    />
                  </figure> */}
                  {/* <TestIcon eyecatch={eyecatch} /> */}
                  <Test2 eyecatch={eyecatch} />
                  <span>{title}</span>
                  {/* <h2 className={styles.name}>{category.name}</h2> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {props.modalNumber === 3 && (
        <div className={styles.menuArea}>
          <div className={styles.display}>
            <ul>
              <li>
                <Maruta />
                <span className={styles.text}>ウエウエテナンゴ</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
