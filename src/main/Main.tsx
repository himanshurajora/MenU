import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import './Main.css'

function Main() {

  const fadein = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

  return (
    <div className="Main">
        This is The Main Page
    </div>
  )
}

export default Main
