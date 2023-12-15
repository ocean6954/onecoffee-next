import Link from 'next/link'
import styles from 'styles/nav.module.css'
import { useRef, useState, useEffect } from 'react'
import { HeaderBean } from './iconSVG'

export default function Nav() {
  const [center, setCenter] = useState(0)
  const elementRefs = Array.from({ length: 3 }, () => useRef())

  const updateCenter = (index) => {
    const clickedX = elementRefs[index].current.getBoundingClientRect()
    const x = clickedX.width / 2 + clickedX.left
    setCenter(x)
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
        <li>None</li>
        {['Home', 'Menu'].map((text, index) => (
          <li
            key={index}
            ref={elementRefs[index]}
            onClick={() => handleClick(index)}
          >
            <Link href={text === 'Home' ? '/' : `/${text.toLowerCase()}`}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className={styles.icon}
        style={{
          left: center,
          transition: 'left 0.5s ease-in-out',
        }}
      >
        <HeaderBean />
      </div>
    </nav>
  )
}
