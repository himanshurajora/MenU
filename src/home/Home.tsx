import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Tilt from 'react-parallax-tilt'
import logo from './logo.svg'
import './Home.css'
import {Link} from 'react-router-dom'
function Home() {

  const fadein = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

  return (
    <div className="App">
      <h1 id="welcome">Welcome to MenU <br /> - By Himanshu</h1>
      <div className="container">
        <Tilt className="box" tiltMaxAngleX={2} tiltMaxAngleY={2} glareEnable={true} glareMaxOpacity={0.5} glareColor={"#ffffff55"} glarePosition={"all"} glareBorderRadius={"15px"}>
            <h1>Are You Ready?</h1>
            <Link to="/main"><strong>Start A <span id="menu">Call 📞</span></strong></Link>
        </Tilt>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
    </div>
  )
}

export default Home
