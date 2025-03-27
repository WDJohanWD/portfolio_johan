import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { Footer } from './components/Footer'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'

function Layout() {
  return (
    <>
      <div className=''>
        <Header />
        <Routes>
          <Route path="/portfolio-johan" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects/>
            </> 
          } />
        </Routes>
        <Footer />
      </div>
    </>
  )
}




function App() {

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
