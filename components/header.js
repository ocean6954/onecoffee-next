import Nav from 'components/nav'
import styles from 'styles/header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Nav />
    </header>
  )
}
