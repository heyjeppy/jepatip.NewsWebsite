import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ContentSection from './components/ContentSection'
import ArticleSection from './components/ArticleSection'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <ContentSection />
      <ArticleSection />
      <Footer />
    </>
  )
}

export default App
