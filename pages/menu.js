import styles from 'styles/menu.module.css'
import MenuDisplay from 'components/menuDisplay'
import React, { useState } from 'react'
import { Drink, Bean, Food } from 'components/iconSVG'

export default function () {
  const [showDrink, setShowDrink] = useState(false)
  const [showCoffee, setShowCoffee] = useState(false)
  const [showFood, setShowFood] = useState(false)
  const [modalNumber, setModalNumber] = useState(null)

  const [clicked, setClicked] = useState(false)

  // const handleClick = () => {
  //   setClicked(!clicked) // クリック状態を反転させます
  // }

  // const openModal = (modalNumber) => {
  //   closeModal()

  //   if (modalNumber === 1) {
  //     setShowDrink(true)
  //     setModalNumber(modalNumber)
  //     setClicked(!clicked)
  //   } else if (modalNumber === 2) {
  //     setShowCoffee(true)
  //     setModalNumber(modalNumber)
  //     setClicked(!clicked)
  //   } else if (modalNumber === 3) {
  //     setShowFood(true)
  //     setModalNumber(modalNumber)
  //     setClicked(!clicked)
  //   }
  // }

  const openModal = (modalNumber) => {
    setModalNumber(modalNumber)
  }

  const closeModal = () => {
    setModalNumber(null)
  }

  const handleIconClick = (modalNumber) => {
    // アイコンをクリックした際に前のモーダルを閉じる
    closeModal()

    // 新しいモーダルを表示
    openModal(modalNumber)
  }

  return (
    <>
      <div className={styles.content}>
        <button onClick={() => handleIconClick(1)}>
          <div className={styles.circle}>
            <div
              className={`${styles.circleOn} ${
                modalNumber === 1 ? styles.clicked : ''
              }`}
            ></div>
            <Drink />
          </div>
        </button>
        <button onClick={() => handleIconClick(2)}>
          <div className={styles.circle}>
            <div
              className={`${styles.circleOn} ${
                modalNumber === 2 ? styles.clicked : ''
              }`}
            ></div>
            <Bean />
          </div>
        </button>
        <button onClick={() => handleIconClick(3)}>
          <div className={styles.circle}>
            <div
              className={`${styles.circleOn} ${
                modalNumber === 3 ? styles.clicked : ''
              }`}
            ></div>
            <Food />
          </div>
        </button>
      </div>
      {modalNumber !== null && modalNumber === 1 && (
        <MenuDisplay modalNumber={modalNumber} onClose={closeModal} />
      )}
      {modalNumber !== null && modalNumber === 2 && (
        <MenuDisplay modalNumber={modalNumber} onClose={closeModal} />
      )}
      {modalNumber !== null && modalNumber === 3 && (
        <MenuDisplay modalNumber={modalNumber} onClose={closeModal} />
      )}

      {/* <div className={styles.content}>
        <div className={styles.circle}>
          <Drink />
        </div>
        <div className={styles.circle}>
          <Bean />
        </div>
        <div className={styles.circle}>
          <Food />
        </div>
      </div> */}
    </>
  )
}
