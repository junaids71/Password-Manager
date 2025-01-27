import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import Manager from './components/Manager'
function App() {

  return (
    <>

    <Navbar/>
    <div className='min-h-[87vh]'>
    <Manager/>
    </div>
    <Footer/>
    </>
  )
}

export default App
