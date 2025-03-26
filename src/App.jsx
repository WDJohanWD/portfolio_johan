import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import  { Header }  from './components/Header'
import { Hero } from './sections/Hero'
import { Footer } from './components/Footer'
import { About } from './sections/About'
function Layout(){
  return(
    <>
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
            <Hero/>
            <About/>
          </>
          }/>
      </Routes>
      <Footer/>
    </>
  )
}




function App() {

  return (
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  )
}

export default App
