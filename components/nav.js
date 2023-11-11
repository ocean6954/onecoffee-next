import Link from 'next/link'
import styles from 'styles/nav.module.css'
import { useRef, useState, useEffect } from 'react'
import { HeaderBean } from './iconSVG'

export default function Nav() {
  const [center, setCenter] = useState(0)
  const elementRefs = Array.from({ length: 3 }, () => useRef())

  const updateCenter = (index) => {
    const clickedX = elementRefs[index].current.getBoundingClientRect()
    const x = clickedX.width / 2.5
    console.log(`x is ${x}`)
    console.log(` is ${clickedX.right}`)
    setCenter(x)
    console.log(`setCenter is ${center}`)
  }

  useEffect(() => {
    updateCenter(0)
  }, [])

  const handleClick = (index) => {
    updateCenter(index)
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {['Home', 'About', 'Coffee'].map((text, index) => (
          <li
            key={index}
            ref={elementRefs[index]}
            onClick={() => handleClick(index)}
          >
            <Link href="">{text}</Link>
          </li>
        ))}
      </ul>
      <div className={styles.icon} style={{ left: center }}>
        {console.log(`left is ${center}`)} <HeaderBean />
      </div>
      <div
        style={{ width: center, height: center, backgroundColor: 'red' }}
      ></div>
    </nav>
  )
}
