import styles from 'styles/hero.module.css'

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div className={styles.text}>
      <h1 className={styles.title}>
        {title}
        <br />
        {subtitle}
      </h1>
    </div>
  )
}
