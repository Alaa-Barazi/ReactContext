import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GiftProvider } from './GiftContexts'
import Father from './Components/Father/Father'
import GrandFather from './Components/Grandfather/Grandfather'
import Grandson from './Components/Grandson/Grandson'

function App() {
  

  return (
    <>
    
     <GiftProvider>
     <GrandFather />
     </GiftProvider>
    </>
  )
}

export default App
