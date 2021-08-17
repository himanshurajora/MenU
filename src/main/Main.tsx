import React, { useEffect, useRef, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import './Main.css'
import io from 'socket.io-client'
import Peer from 'peerjs'


function Main() {

    var localStream: MediaStream
    var remoteStream: MediaStream

    const [peopleSec, setpeopleSec] = useState(true);

    const me = useRef<HTMLVideoElement>()
    const you = useRef<HTMLVideoElement>()

    // useEffect(() => {

    //     const roomId = new URL(window.location.toString()).pathname.slice(1, window.location.toString().length - 1)

    //     me.current.autoplay = true
    //     me.current.muted = true
    //     you.current.autoplay = true

    //     var socket = io("http://localhost:5000")

    //     var mypeer = new Peer(undefined, {
    //         "host": "/",
    //         "port": 3005
    //     })

    //     mypeer.on('open', (id) => {
    //         socket.emit("joined", roomId, id)
    //     })

    //     navigator.mediaDevices.getDisplayMedia({ video: true, audio: false }).then(stream => {
    //         me.current.srcObject = stream
    //     })


    //     mypeer.on('call', call => {

    //         call.answer(me.current.srcObject as MediaStream)
    //         console.log("call came")

    //         call.on('stream', (stream)=>{
    //             stream.getTracks().forEach(track => {
    //                 console.log(track.kind);

    //             })
    //         })

    //         call.on("error", (err)=>{console.log(err)})

    //         // call.on('stream', stream => {
    //         //     you.current.srcObject = stream
    //         // })

    //         // call.on("close", () => {
    //         //     you.current.srcObject = null
    //         // })
    //     })

    //     socket.on("user-connected", (userId) => {

    //         var call = mypeer.call(userId, me.current.srcObject as MediaStream)

    //         // call.on('stream', (stream) => {
    //         //     you.current.srcObject = stream
    //         // })

    //         // call.on("close", () => {
    //         //     you.current.srcObject = null
    //         // })

    //     })

    // }, [])



    return (
        <div className="Main">
            <div className="container">
                <div className="left"></div>
                <div className="right">
                    <div className="top">
                        <div className="people">
                            <button id="people" onClick={() => {
                              setpeopleSec(true)
                            }}>People</button>
                        </div>
                        <div className="chat">
                            <button id="chat" onClick={() => {
                              setpeopleSec(false)
                            }}>Chat</button>
                        </div>
                    </div>
                    <div className="bottom">
                        {
                            peopleSec ? <div className="peopleSec">
                                <div className="person"></div>
                            </div> :
                                <div className="chatSec">
                                    <div className="text">
                                        <p className="title">Himanshu Jangid</p>
                                        Demo Text</div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main