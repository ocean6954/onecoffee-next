import Container from '/components/container'
import Nav from 'components/nav'
import { SmallLogo } from 'components/logo'
import styles from 'styles/header.module.css'
import LineMove from 'components/lineMove'

export default function Header(props) {
  return (
    <header className={styles.header}>
      <Container large>
        <div className={styles.flexContainer}>
          <Nav />
          {/* <LineMove /> */}
        </div>
      </Container>
    </header>
  )
}
