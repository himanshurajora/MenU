import React, { useState } from 'react'
import Tilt from 'react-parallax-tilt'
import './Home.css'
import {Link} from 'react-router-dom'
import { nanoid } from 'nanoid'
import ReactNotification, {store} from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function Home() {

  const [name, setname] = useState(`Anonymous_${nanoid(2)}`);
  const [message, setmessage] = useState();

  const storeName = (e : any) => {
    e.preventDefault()
    localStorage.setItem("username", name)

    store.addNotification({
      title: "Successful!",
      message: `Saved Your Name : ${name}`,
      type: "success",
      insert: "bottom",
      container: "bottom-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true
      }
    });
  }

  return (
    <div className="App">
      <ReactNotification></ReactNotification>
      <h1 id="welcome">Welcome to MenU <br /> - By Himanshu</h1>
      <div className="container">
        <Tilt className="box" tiltMaxAngleX={2} tiltMaxAngleY={2} glareEnable={true} glareMaxOpacity={0.5} glareColor={"#ffffff55"} glarePosition={"all"} glareBorderRadius={"15px"}>
            <h1>Are You Ready?</h1>
            <div className="form">
              <form>
                <input type="text" onChange={(e)=>{setname(e.target.value)}} value={name} id="nameinput" placeholder="Your Name"/>
                <input type="submit" value="Save" id="savebtn" onClick={storeName}/>
              </form>
            </div>
            <Link to={`/${nanoid()}`}><strong>Start A <span id="menu">Call 📞</span></strong></Link>
        </Tilt>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
    </div>
  )
}

export default Home
