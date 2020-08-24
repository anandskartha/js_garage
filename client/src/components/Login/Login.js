import React, {useContext} from 'react'
import {AuthContext} from '../../context'
import { Redirect } from "react-router-dom";

function Login() {
    const { logIn, logOut, loggedIn } = useContext(AuthContext)
    return (
        <div className="login-space">
            {!loggedIn? (<><button onClick={() => logIn({
                email: 'anand@gmail.com'
            })}>Login</button><Redirect to='/about' /></>) : (<button onClick={() => logOut({
                email: 'anand@gmail.com'
            })}>Log off</button>)}
        </div>
    )
}

export default Login
