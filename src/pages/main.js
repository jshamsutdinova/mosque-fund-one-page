import React, {useState} from 'react'
import Sidebar from '../components/sidebar/sidebar'
import Navbar from '../components/navbar/navbar'
import StartSection from '../components/start-section/start-section'
import DocSection from '../components/doc-section/doc-section'
import Footer from '../components/footer/footer'

const Main = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <StartSection />
      <DocSection/>
      <Footer />
    </>
  )
}

export default Main