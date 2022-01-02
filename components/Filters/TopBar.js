import Image from "next/image"
import React from 'react'
import styles from '../../pages/photo-filter/PhotoFilter.module.css'
import electric from '../../assets/imgs/electric.png'
import Link from "next/link"

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.logo}>
        <Link href="/home">
          <a>
            <Image 
              src={electric} 
              className={styles.logoImg} 
              alt=""
              width={30}
              height={40}
            />
          </a>
        </Link>
      </div>
      <div className={styles.socialContainer}>
        <button className={styles['fb-btn']}><i className="fab fa-facebook-f"></i>Share On Facebook</button>
        <button className={styles['insta-btn']}><i className="fab fa-instagram"></i>Share On Instagram</button>
        <Link href="https://github.com/urielbitton">
          <a target="_blank">
            <button className={styles['github-btn']}><i className="fab fa-github"></i></button>
          </a>
        </Link>
      </div>
    </div>
  )
}
