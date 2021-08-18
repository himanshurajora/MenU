import React, { useEffect, useRef, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import './Main.css'
import io, { Socket } from 'socket.io-client'
import Peer from 'peerjs'


const roomId = new URL(window.location.toString()).pathname.slice(1, window.location.toString().length - 1)
var username = localStorage.getItem('username')

function Main() {

    const [mypeer, setmypeer] = useState(
        new Peer(undefined, {
            "host": "/",
            "port": 3005
        }));

    const [socket, setsocket] = useState(io("http://localhost:5000"))

    const peopleSec = useRef<HTMLDivElement>(null)
    const chatSec = useRef<HTMLDivElement>(null)
    const chatBtn = useRef<HTMLButtonElement>(null)
    const peopleBtn = useRef<HTMLButtonElement>(null)

    const [message, setmessage] = useState("");

    const showPeople = () => {
        peopleSec.current.style.display = "block"
        peopleBtn.current.className = "is-active"
        chatBtn.current.className = "chatbtn"
        chatSec.current.style.display = "none"
    }

    const showChat = () => {
        peopleSec.current.style.display = "none"
        chatSec.current.style.display = "block"
        peopleBtn.current.className = "peoplebtn"
        chatBtn.current.className = "is-active"
    }

    const addPerson = (username: string) => {
        var person = document.createElement("div")
        person.className = "person"
        person.innerText = username
        peopleSec.current.appendChild(person)

        var message = document.createElement("div")
        message.className = "person"
        message.innerText = username + " joined the room"
        chatSec.current.appendChild(message)
    }

    const addMessage = (username: string, message: string) => {
        var msg = document.createElement("div")
        msg.className = "text"
        var user = document.createElement("p")
        var text = document.createElement("p")
        user.className = "title"
        user.innerText = username
        text.innerText = message
        msg.append(user, text)
        chatSec.current.appendChild(msg)
    }

    const sendMessage = (e: any) => {
        e.preventDefault()
        if (message) {
            chatBtn.current.click()
            socket.emit("message", roomId, username, message)
            addMessage("You", message)
        }
        setmessage("")
    }

    useEffect(() => {
        peopleSec.current.style.display = "block"
        peopleBtn.current.className = "is-active"
        chatSec.current.style.display = "none"

        mypeer.on('open', (id) => {
            socket.emit("joined", roomId, id, username)
        })

        socket.on("user-connected", (userid, username) => {
            addPerson(username)
            
            navigator.mediaDevices.getUserMedia({"video": false, "audio": true}).then(stream=>{
                
            })

        })

        socket.on("message", (username, message) => {
            console.log("message came");

            addMessage(username, message)
        })

        // navigator.mediaDevices.getDisplayMedia({ video: true, audio: false }).then(stream => {
        //     me.current.srcObject = stream
        // })


        // mypeer.on('call', call => {

        //     call.answer(me.current.srcObject as MediaStream)
        //     console.log("call came")

        //     call.on('stream', (stream)=>{
        //         stream.getTracks().forEach(track => {
        //             console.log(track.kind);

        //         })
        //     })

        //     call.on("error", (err)=>{console.log(err)})

        //     // call.on('stream', stream => {
        //     //     you.current.srcObject = stream
        //     // })

        //     // call.on("close", () => {
        //     //     you.current.srcObject = null
        //     // })
        // })


    }, [socket])

    return (
        <div className="Main">
            <div className="container">
                <div className="left">
                    <div className="people-grid">
                        <div className="person-circle">
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="top">
                        <div className="people">
                            <button className="peoplebtn" ref={peopleBtn} onClick={showPeople}>People</button>
                        </div>
                        <div className="chat">
                            <button className="chatbtn" ref={chatBtn} onClick={showChat}>Chat</button>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="peopleSec" ref={peopleSec}>

                        </div>
                        <div className="chatSec" ref={chatSec}>

                        </div>
                        <div className="messageform">
                            <form onSubmit={sendMessage}>
                                <input type="text" autoComplete={"off"} id="messagetext" value={message} onChange={(e) => { setmessage(e.target.value) }} placeholder="Enter Message" />
                                <input type="submit" value="Send" id="messagebtn" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main