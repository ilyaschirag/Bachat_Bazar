import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Components/Homepage/Homepage'

function App() {


  return (
    <>
      <Navbar/>
      <Homepage/>
    </>
  )
}

export default App
