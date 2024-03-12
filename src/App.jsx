import { useState } from 'react'

import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer text={"¡Bienvenidx!"}></ItemListContainer>
       <ItemCount stock={10}></ItemCount>
    </>
  )
}

export default App
