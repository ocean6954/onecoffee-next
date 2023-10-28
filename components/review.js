import Image from 'next/image'
import latte from 'images/latte2.png'
import styles from 'styles/review.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
export default function Review() {
  return (
    <>
      <div className={styles.waku}>
        <h2 className={styles.title}>コーヒーのこだわり</h2>
        <div className={styles.content}>
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
        <p>紹介文aboutの 内容的なななな</p>

        <Link href="coffee/menu" className={styles.link2}>
          <span className={styles.link}>
            and more{' '}
            <FontAwesomeIcon
              icon={faAngleRight}
              // iconSize="2xs"
              // style={{ color: '#d9a62e' }}
              className={styles.icon}
            />
          </span>
        </Link>
      </div>
    </>
  )
}
