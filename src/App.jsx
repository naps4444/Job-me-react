import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Sign from './pages/Sign'
import ContactPage from './pages/ContactPage'
import JobApply from './pages/JobApply'
import JobListing from './pages/JobListing'
import SingleJob from './pages/SingleJob'


function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign' element={<Sign />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/jobapply' element={<JobApply />} />
        <Route path='/joblisting' element={<JobListing />} />
        <Route path='singlejob' element={<SingleJob />} />

        

        
      </Routes>
    </Router>

      
    </>
  )
}

export default App
