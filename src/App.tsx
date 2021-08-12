import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Tilt from 'react-parallax-tilt'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const fadein = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

  return (
    <div className="App">
      <h1 id="welcome">Welcome to MenU <br /> - By Himanshu</h1>
      <div className="container">
        <Tilt className="box" tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={400}>
            <h1>Are You Ready?</h1>
            <button><strong>Start A <span id="menu">Call 📞</span></strong></button>
        </Tilt>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
    </div>
  )
}

export default App
