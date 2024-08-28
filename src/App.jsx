import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav/Nav'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import Section4 from './Section4/Section4'
import Section5 from './Section5/Section5'
import Section6 from './Section6/Section6'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </>
  )
}

export default App
