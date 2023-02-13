import styles from 'styles/hero.module.css'

export default function Hero({ title, subtitle }) {
  const r = 'red'
  return (
    <h1 className={styles.title}>
      {title}
      <br />
      {subtitle}
    </h1>
  )
}
