import React from 'react'
import Layouts from './Layouts'
import Home from './pages/Home'
import Column from './Column'
import '../styles/index.css'
export default function App() {
  return (
    <div>
      <Layouts>
        <Home />
        <Column />
      </Layouts>
    </div>
  )
}
