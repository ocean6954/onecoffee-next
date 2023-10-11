import styles from 'styles/menuDisplay.module.css'
import Link from 'next/link'
import Image from 'next/image'
import icon from 'images/icon.png'
import Container from 'components/container'
import { useState } from 'react'
import Modal from 'components/modal'
import Nami from 'images/shape2.svg'
import Mug from 'images/icon/mug11.svg'
import { CoffeeCup } from './iconSVG'
import { Tea } from './iconSVG'
import { Geisha } from './iconSVG'
// import Container from 'src/components/container'

export default function MenuDisplay(props) {
  const [modal, setModal] = useState(false)
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={props.onClose}>
            &times;
          </span>
          {props.children}
        </div>
      </div>

      <div className={styles.menuArea}>
        <div className={styles.display}>
          {props.modalNumber === 1 && (
            <>
              <ul>
                <li>
                  <CoffeeCup />
                  <span>ホットコーヒー</span>
                </li>
                <li className={styles.menuList}>
                  <Tea />
                  <span>ホットティー</span>
                </li>
              </ul>
              <ul></ul>
            </>
          )}
          {props.modalNumber === 2 && (
            <>
              <h2 className={styles.text}>コーヒー豆一覧だよ</h2>
              <Geisha />
            </>
          )}
          {props.modalNumber === 3 && (
            <>
              <h2 className={styles.text}>フード一覧だよ</h2>
              <p className={styles.text}> This is the content of Modal 3.</p>
            </>
          )}
        </div>
      </div>
    </>
  )
}
