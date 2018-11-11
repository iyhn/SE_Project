import React from 'react';
import api from '../api/api';

class Login extends React.Component{
    render = () => (
        <div style={{position:'absolute', top:'50vh', left:'50vw'}}>
            <input type='text' id='username' placeholder='username'></input>
            <input type='password' id='password' placeholder='password'></input>
            <button onClick={() => api.login({username: document.getElementById('username').value,
                password: document.getElementById('password').value})}> login </button>
        </div>
    )
}

export default Login;