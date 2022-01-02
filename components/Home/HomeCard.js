import { useRouter } from "next/router"
import React from 'react'
import styles from './HomeCard.module.css'

export default function HomeCard(props) {

  const { title, description, icon, url } = props.card
  const router = useRouter()

  return (
    <div className={styles.HomeCard} onClick={() => router.push(url)}>
      <i className={icon}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
