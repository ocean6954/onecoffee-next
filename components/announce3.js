import styles from 'styles/announce3.module.css'
import Link from 'next/link'
import Image from 'next/image'
import icon from 'images/icon.png'
import Container from 'components/container'
import { useState } from 'react'
import Modal from 'components/modal'
import Nami from 'images/shape2.svg'
import Mug from 'images/icon/mug11.svg'
// import Container from 'src/components/container'

export default function Announce3({
  title,
  // line,
  // isButton = false,
  // link = '#',
}) {
  const [modal, setModal] = useState(false)
  return (
    <>
      {/* <h2 className={styles.content}>{title}</h2> */}
      <div className={styles.content}>
        <Nami
          // width={2600}
          // height={100}
          // width="100vw"
          // max-width="100%"
          // height="100%"
          // layout="responsive"
          // sizes="100vw"
          // style={{ display: 'block' }}
          // className={styles.abc}
          className={styles.nami}
        />
        <Mug
          width="10%"
          height="10%"
          stroke={'#456'}
          strokeWidth={'2.5px'}
          // fill={'green'}
          style={{ display: 'block' }}
          className={styles.bb}
        />
      </div>

      <Container>
        <div></div>
      </Container>
    </>
  )
}
