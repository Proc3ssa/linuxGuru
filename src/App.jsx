import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './layouts/Main'
import Index from './pages/Index'
import About from './pages/About'
import Home from './pages/Home'
import Command from './pages/Command'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Main />}>
      
      <Route index element={<Index />} />
      <Route path='/about' element={<About />} />
      <Route path='/home' element={<Home />} />
      <Route path='/command' element={<Command />} />


    

    </Route>
   
  )
)
const App = () => {
  return (
   <RouterProvider router={router} />
  )
}

export default App
