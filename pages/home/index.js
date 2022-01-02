import Link from "next/link"
import React from 'react'
import HomeCard from '../../components/Home/HomeCard'
import styles from './HomePage.module.css'

export default function HomePage() {

  const cardsArray = [
    {
      title: 'Photo Filter',
      description: 'A photo filter web app that lets you edit your images on the fly.',
      icon: 'fad fa-camera-retro',
      url: '/photo-filter'
    },
    {
      title: 'Web Designer',
      description: 'A web designer platform that you can use to geneate quick designs for your websites & apps',
      icon: 'fad fa-browser',
      url: '/web-designer'
    }
  ]

  const cardsArrayRender = cardsArray?.map((card, i) => {
    return <HomeCard card={card} key={i} />
  })

  return (
    <div className={styles.homePage}>
      <div className={styles.grid}>
        <div className={styles.titles}>
          <h1>Welcome to<br/><span>El<i className="fal fa-bolt"></i>ctrify</span></h1>
          <h4>Choose an app to get started</h4>
        </div>
        <div className={styles.cardsGrid}>
          {cardsArrayRender}
        </div>
        <div className={styles.footerText}>
          <p>Copyright &copy; 2022. <Link href="/"><a>Electrify App</a></Link>.</p>
        </div>
      </div>
    </div>
  )
}
