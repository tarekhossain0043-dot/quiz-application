import React from 'react'
import Navbar from './Navbar'
import LayoutCss from '../styles/layout.module.css'

export default function Layouts({children}) {
  return (
    <div>
        <Navbar/>
        <main className={LayoutCss.main}>
            <div className={LayoutCss.container}>
                {children}
            </div>
        </main>
    </div>
  )
}
