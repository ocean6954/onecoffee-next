import styles from 'styles/modal.module.css'

export default function ({ active = false, setModal }) {
  const closeModal = () => {
    setModal(false)
  }
  return (
    <div
      className={active ? styles.modalOpen : styles.modalClose}
      onClick={closeModal}
    >
      {active && (
        <style jsx global>{`
          body {
            overflow: hidden;
            width: 100%;
          }
        `}</style>
      )}
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <p>モーダルウィンドウです</p>
        <button onClick={() => setModal(false)}>閉じる</button>
      </div>
    </div>
  )
}
