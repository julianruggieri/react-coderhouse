

import { useState } from 'react'
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<ItemListContainer text={"¡Bienvenidx!"}></ItemListContainer>}></Route>
      <Route path='/category/:categoryId' element={<ItemListContainer text={"Productos de la categoría: "}></ItemListContainer>}> </Route>
      <Route path='/item/:itemId' element={<ItemDetailContainer></ItemDetailContainer>}> </Route>
    </Routes>
    
      
    </BrowserRouter>
      
      
       
    </>
  )
}

export default App
