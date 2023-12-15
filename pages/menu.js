import styles from 'styles/menu.module.css'
import MenuDisplay from 'components/menuDisplay'
import React, { useState, useEffect } from 'react'
import { Drink, Bean, Food } from 'components/iconSVG'
import Container from 'src/components/container'
import { getAllPosts } from 'lib/api'
import { getPlaiceholder } from 'plaiceholder'
import { useRouter } from 'next/router'

export default function Menu({ posts }) {
  const [modalNumber, setModalNumber] = useState(null)
  const router = useRouter()

  const openModal = (modalNumber) => {
    setModalNumber(modalNumber)
  }

  const closeModal = () => {
    setModalNumber(null)
  }

  const handleIconClick = (modalNumber) => {
    // アイコンをクリックした際に前のモーダルを閉じる
    closeModal()

    // 新しいモーダルを表示
    openModal(modalNumber)
  }

  console.log(`クエリの数字は${router.query.triggerFunction}`)

  useEffect(() => {
    // 関数をここで呼び出す
    if (
      router.query.triggerFunction !== undefined &&
      router.query.triggerFunction !== null
    ) {
      // triggerFunction が存在する場合の処理
      console.log(
        `Trigger function with value: ${router.query.triggerFunction}`,
      )

      // 関数を呼び出す
      handleIconClick(router.query.triggerFunction)
    }
  }, [router.query.triggerFunction])

  return (
    <>
      <Container>
        <div className={styles.content}>
          <button onClick={() => handleIconClick(1)}>
            <div className={styles.circle}>
              <div
                className={`${styles.circleOn} ${
                  modalNumber === 1 ? styles.clicked : ''
                }`}
              ></div>
              <Drink />
            </div>
          </button>
          <button onClick={() => handleIconClick(2)}>
            <div className={styles.circle}>
              <div
                className={`${styles.circleOn} ${
                  modalNumber === 2 ? styles.clicked : ''
                }`}
              ></div>
              <Bean />
            </div>
          </button>
          <button onClick={() => handleIconClick(3)}>
            <div className={styles.circle}>
              <div
                className={`${styles.circleOn} ${
                  modalNumber === 3 ? styles.clicked : ''
                }`}
              ></div>
              <Food />
            </div>
          </button>
        </div>
        {modalNumber !== null && modalNumber === 1 && (
          <MenuDisplay modalNumber={modalNumber} onClose={closeModal} />
        )}
        {modalNumber !== null && modalNumber === 2 && (
          <MenuDisplay
            modalNumber={modalNumber}
            posts={posts}
            onClose={closeModal}
          />
        )}
        {modalNumber !== null && modalNumber === 3 && (
          <MenuDisplay modalNumber={modalNumber} onClose={closeModal} />
        )}
        {modalNumber !== null && modalNumber === 4 && <h1>Hello!</h1>}
        {/* <Posts posts={posts} /> */}
      </Container>
    </>
  )
}
export async function getStaticProps() {
  const posts = await getAllPosts()
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
