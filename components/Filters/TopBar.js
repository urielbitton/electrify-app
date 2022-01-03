import Image from "next/image"
import React from 'react'
import styles from '../../pages/photo-filter/PhotoFilter.module.css'
import electric from '../../assets/imgs/electric.png'
import Link from "next/link"
import { FacebookShareButton, TwitterShareButton } from "react-share";

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
        <FacebookShareButton
          url="https://electrify-app.vercel.app/photo-filter"
          quote="CSS Filters for web designers"
        >
          <button className={styles['fb-btn']}><i className="fab fa-facebook-f"></i>Share On Facebook</button>
        </FacebookShareButton>
        <div className={styles['twitter-btn']}>
          <TwitterShareButton
            title="Check out the ultimate css filter tool fr web designers"
            url="https://electrify-app.vercel.app/photo-filter"
          >
            <span><i className="fab fa-twitter"></i>Share On Twitter</span>
          </TwitterShareButton>
        </div>
        <Link href="https://github.com/urielbitton">
          <a target="_blank">
            <button className={styles['github-btn']}><i className="fab fa-github"></i></button>
          </a>
        </Link>
      </div>
    </div>
  )
}
