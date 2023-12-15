import { useState } from 'react'
import Layout from './components/Layout'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


function App() {

  

  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/"  element={<Home/>} /> 
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  )
}

export default App
