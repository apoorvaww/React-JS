import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'


function App() {

  let obj = {
    name: "Apoorva",
    age: 19
  }
  return (
    <>
      <h1>Tailwind Test </h1>
      <Card userName="apoorva" btnText = "Visit my Profile." />
      <Card userName="walia" btnText = "Visit me."/>

    </>
  )
}

export default App
