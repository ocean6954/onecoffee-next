import styles from 'styles/hero.module.css'
import eyecatch from 'images/hero.jpeg'
import Image from 'next/image'

export default function Hero({ title, subtitle }) {
  return (
    <>
      <div className={styles.catch}>
        <figure>
          <Image
            src={eyecatch}
            alt=""
            layout="responsive"
            sizes="100vw"
            priority
            placeholder="blur"
          />
        </figure>
        <h1 className={styles.title}>
          {title}
          <br />
          {subtitle}
        </h1>
      </div>
    </>
  )
}
