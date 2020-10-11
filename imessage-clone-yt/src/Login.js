import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            {/* <h2>Login Page</h2> */}
            <div className="login__logo">
                <img src="" alt=""/>
                <h1>Imessage</h1>
            </div>
            <Button onClick={signIn}>Sign In</Button>
            
        </div>
    )
}

export default Login
