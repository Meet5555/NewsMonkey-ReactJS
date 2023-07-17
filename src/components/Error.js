import React from 'react'
import NavBar from './NavBar'

export default function Error() {
    let myStyle = {
        width: "50vw",
        height: "50vh",
        position: "absolute",
        top: "50%"
    }
    return (
        <div>
            <NavBar />
            <img src="./error.png" alt="Error" style={myStyle} />
        </div>
    )
}
