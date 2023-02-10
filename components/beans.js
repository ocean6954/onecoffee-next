import styles from 'styles/beans.module.css'
import Image from 'next/image'
import bean1 from 'images/bean1.png'
import bean2 from 'images/bean2.png'
import bean25 from 'images/bean25.png'
import bean3 from 'images/bean3.png'
import bean4 from 'images/bean4.png'

export default function Beans() {
  return (
    <div className={styles.beans}>
      <figure>
        <Image
          src={bean1}
          alt=""
          layout="fixed"
          sizes="(min-width: 768px) 25px,16px"
          placeholder="blur"
        />
      </figure>
      <figure>
        <Image
          src={bean2}
          alt=""
          layout="fixed"
          sizes="(min-width: 768px) 25px,16px"
          placeholder="blur"
        />
      </figure>
      <figure>
        <Image
          src={bean25}
          alt=""
          layout="fixed"
          sizes="(min-width: 768px) 25px,16px"
          placeholder="blur"
        />
      </figure>
      <figure>
        <Image
          src={bean3}
          alt=""
          layout="fixed"
          sizes="(min-width: 768px) 25px,16px"
          placeholder="blur"
        />
      </figure>
      <figure>
        <Image
          src={bean4}
          alt=""
          layout="fixed"
          sizes="(min-width: 768px) 25px,16px"
          placeholder="blur"
        />
      </figure>
    </div>
  )
}
