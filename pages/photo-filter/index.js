import React from 'react'
import Meta from "../../components/Meta/Meta"
import TopBar from "./TopBar"
import FilterWindow from "./FilterWindow"
import FilterSidebar from "./FilterSidebar"
import { server } from "../../config"
import styles from './PhotoFilter.module.css'

export default function PhotoFilter({presets}) {

  return (
    <div className="photo-filter-page">
      <Meta title="Photo Filter - Electrify App"/>
      <TopBar />
      <div className={styles.filterApp}>
        <FilterWindow presets={presets} />
        <FilterSidebar presets={presets} />
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/filter-presets`)
  const presets  = await res.json()
  return {
    props: {
      presets
    }
  }
}