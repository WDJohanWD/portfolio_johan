import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import  { Header }  from './components/Header'
import { Home } from './sections/Home'
import { Footer } from './components/Footer'

function Layout(){
  return(
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
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
