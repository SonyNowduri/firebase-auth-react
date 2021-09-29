import React from 'react'
import app from '../../firebase'

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <button onClick={()=>app.auth().signOut()}>signOut</button>
        </div>
    )
}
