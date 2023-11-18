import styles from 'styles/information.module.css'
import Image from 'next/image'
import store from 'images/store.jpg'
import { MugFill } from './iconSVG'

export default function Information() {
  const infoData = [
    { name: '住所', description: '北海道函館市港町<br />1-18-37 ' },
    { name: '営業時間', description: '土日月 11:00~17:00 ' },
    { name: '座席', description: '店内5席' },
    { name: '支払い方法', description: 'PayPay / 楽天pay / 現金' },
  ]
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Information</h2>
        <div className={styles.layout}>
          <div className={styles.text}>
            <ul>
              {infoData.map((data, index) => (
                <li key={index} className={styles.list}>
                  <p className={styles.name}>{data.name}</p>
                  <p
                    dangerouslySetInnerHTML={{ __html: data.description }}
                    className={styles.description}
                  ></p>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.image}>
            <Image
              src={store}
              alt=""
              layout="responsive"
              // width={50}
              // height={100}
              placeholder="blur"
              blurDataURL={store.blurDataURL}
              className={styles.img}
            />
            <div className={styles.mug}>
              <MugFill />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
