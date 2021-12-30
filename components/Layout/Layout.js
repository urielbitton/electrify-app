import React from 'react'
import Meta from "../Meta/Meta"

export default function Layout({children}) {
  return (
    <>
    <Meta />
      <main className="main-app">
        {children}
      </main>
    </>
  )
}
