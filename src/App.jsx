import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { Footer } from './components/Footer'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Project } from './sections/Project'
function Layout() {
  return (
    
      <div id='hero' className='overflow-x-hidden w-full max-w-full'>
        <Header />
        <Routes>
          <Route path="/portfolio_johan/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects/>
            </> 
          } />
          <Route path="/portfolio_johan/project/:id" element={<Project/>}/>
        </Routes>
        <Footer />
      </div>
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
