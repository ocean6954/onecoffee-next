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
        <h2 className={styles.title}>Menu</h2>
        <div className={styles.linkWrapper}>
          <div className={styles.image}>
            <h3>Drink</h3>
            <Image
              src={latte}
              alt=""
              layout="responsive"
              width={50}
              // height={100}
              placeholder="blur"
              blurDataURL={latte.blurDataURL}
            />
          </div>
          <div className={styles.image}>
            <h3>Food</h3>
            <Image
              src={desert}
              alt=""
              layout="responsive"
              width={50}
              // height={100}
              placeholder="blur"
              blurDataURL={latte.blurDataURL}
            />
          </div>
          <div className={styles.image}>
            <h3>Coffee</h3>
            <Image
              src={mug}
              alt=""
              layout="responsive"
              width={50}
              // height={100}
              placeholder="blur"
              blurDataURL={latte.blurDataURL}
            />
          </div>
          <Link href="menu" className={styles.link}>
            一覧へ
          </Link>
        </div>
      </div>
    </>
  )
}
