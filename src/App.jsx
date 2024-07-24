import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ContentSection from './components/ContentSection'
import ArticleSection from './components/ArticleSection'
import Footer from './components/Footer'


function App() {


  return (
    <>
    <div className='App'>
		    <Navbar />
        <Routes>
        	<Route path="/news" element={<HeroSection />} />
        	<Route path="/features" element={<ContentSection />} />
        	<Route path="/articles" element={<ArticleSection />} />
      	</Routes>
        <Footer />
		</div>


    </>
  )
}

export default App
