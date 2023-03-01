/** @jsxImportSource @emotion/react */

import { css, jsx } from '@emotion/react'
// import './styles.css'
import { useState } from 'react'
import Image from 'next/image'
import styles from 'styles/character.module.css'

export default function Character({ eyecatch, content }) {
  return (
    <>
      <div className={styles.flexContainer}>
        <Image
          src={eyecatch.url}
          alt=""
          layout="fixed"
          width={eyecatch.width}
          height={eyecatch.height}
          className={styles.img}
        />
        <p className={styles.content}>{content}</p>
      </div>
    </>
  )
}
