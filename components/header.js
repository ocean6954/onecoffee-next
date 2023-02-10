import Container from '/components/container'
import Nav from 'components/nav'
import Logo from 'components/logo'
import styles from 'styles/header.module.css'

export default function Header(props) {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo />
          <Nav />
        </div>
      </Container>
    </header>
  )
}
