import Container from 'components/container'
import styles from 'styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <h className={styles.text}>
          <span>&copy;</span> Charcoal Fire Roasted Coffee - oneCoffee
        </h>
      </Container>
    </footer>
  )
}
