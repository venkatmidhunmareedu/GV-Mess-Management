import { useState } from 'react'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Notifications from './pages/Notifications';


function App() {



  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
