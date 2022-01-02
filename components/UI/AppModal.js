import React from 'react'
import styles from './AppModal.module.css'

export default function AppModal(props) {

  const {title, children, actions, showModal, setShowModal} = props

  return (
    <div className={`${styles['app-modal-container']} ${showModal ? styles.show : ""}`} onMouseDown={() => setShowModal(false)}>
      <div className={styles["app-modal"]} onMouseDown={(e) => e.stopPropagation()}>
        <header>
          <h4>{title}</h4>
          <div className={styles["icon-container"]} onClick={() => setShowModal(false)}>
            <i className="fal fa-times"></i>
          </div>
        </header>
        <section>
          {children}
        </section>
        <footer>
          {actions}
        </footer>
      </div>
    </div>
  )
}
