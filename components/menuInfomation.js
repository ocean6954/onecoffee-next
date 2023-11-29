import Image from 'next/image'
import styles from 'styles/menuInformation.module.css'
import Link from 'next/link'
import latte from 'images/kirinuki/latte2.png'
import desert from 'images/kirinuki/desert.png'
import mug from 'images/kirinuki/mug.png'
import { toggleModal } from 'pages/menu.js'

export default function MenuInformation() {
  return (
    <>
      <div className={styles.container}>
        <h2x className={styles.title}>Menu</h2x>
        <div className={styles.linkWrapper}>
          <div className={styles.image}>
            <Image
              src={latte}
              alt=""
              layout="responsive"
              width={50}
              // height={100}
              placeholder="blur"
              blurDataURL={latte.blurDataURL}
            />
            <h2>Drink</h2>
          </div>
          <div className={styles.image}>
            <Image
              src={desert}
              alt=""
              layout="responsive"
              width={50}
              // height={100}
              placeholder="blur"
              blurDataURL={latte.blurDataURL}
            />
            <h2>Food</h2>
          </div>
          <div className={styles.image}>
            <Image
              src={mug}
              alt=""
              layout="responsive"
              width={50}
              // height={100}
              placeholder="blur"
              blurDataURL={latte.blurDataURL}
            />
            <h2>Coffee</h2>
          </div>
          <Link href="menu" className={styles.link}>
            一覧へ
          </Link>
        </div>
      </div>
    </>
  )
}
