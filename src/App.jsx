import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './sections/Home'

function Layout(){
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
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
