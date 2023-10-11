import styles from 'styles/hero.module.css'
import eyecatch from 'parts/logo.png'
import Image from 'next/image'
import store from 'parts/ver1.5.png'

export default function Hero() {
  return (
    <>
      <div className={styles.logo}>
        <figure>
          <Image
            src={eyecatch}
            alt=""
            layout="responsive"
            // width={50}
            // height={50}
            sizes="(min-width: 768px) 50vw,50vw"
            priority
            placeholder="blur"
          />
        </figure>
      </div>
      <div className={styles.store}>
        <Image
          src={store}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 500px,(min-width: 768px) 100px, 10vw"
          priority
          placeholder="blur"
        />
      </div>
    </>
  )
}
