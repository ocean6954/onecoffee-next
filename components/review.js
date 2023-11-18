import Image from 'next/image'
import latte from 'images/kirinuki/latte2.png'
import styles from 'styles/review.module.css'
import Link from 'next/link'
import { MdChevronRight } from 'react-icons/md'

export default function Review() {
  return (
    <>
      <div className={styles.waku}>
        <h2 className={styles.title}>コーヒーのこだわり</h2>
        <div className={styles.content}>
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
          </div>
          <p>
            こだわりの『炭焼』珈琲を <br />
            自家焙煎し、炭焼特有の香ばしさや
            <br />
            新鮮で美味しく体に優しい珈琲を
            <br />
            提供しています
          </p>
        </div>

        <Link href="coffee/menu" className={styles.link2}>
          <span className={styles.link}>
            and more &nbsp;
            <MdChevronRight className={styles.escape} />
            {/* <span className={styles.escape}>&gt;</span> */}
          </span>
        </Link>
      </div>
    </>
  )
}
