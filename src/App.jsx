import { useState } from 'react'

import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer text={"¡Bienvenidx!"}></ItemListContainer>
      
    </>
  )
}

export default App
