import React from 'react';
import api from '../api/api';
import './Login.css'

class Login extends React.Component{

    login = () => {
        api.login({username: document.getElementById('loginUsername').value,password: document.getElementById('loginPassword').value})
        .then(res=>{
            res.json()
            .then(body=>{
                if(res.ok) api.authAction(body);
                else alert(body)
            })
        })
    }

    switchLogin = () => {
        document.getElementsByClassName('background')[0].style.left = '-50vw';
    }

    switchSignup = () => {
        document.getElementsByClassName('background')[0].style.left = '0';
    }

    signup = () => {
        api.signup({
            username: document.getElementById('signupUsername').value, 
            password: document.getElementById('signupPassword').value,
            firstname: document.getElementById('signupFirstname').value,
            lastname: document.getElementById('signupLastname').value,
            dob: document.getElementById('signupDob').value,
            email: document.getElementById('signupEmail').value,
            address: document.getElementById('signupAddress').value,
            nationality: document.getElementById('signupNationality').value

        })
        .then( res => {
            res.json()
            .then(body => {
                if(res.ok) api.authAction(body)
                else alert(body);
            })
        })
    }

    render = () => (
        <div className='bodyLogin'>
            {/* <input type='text' id='username' placeholder='username'></input>
            <input type='password' id='password' placeholder='password'></input>
            <button onClick={this.login}> login </button>
            <button onClick={() => api.signup({username: document.getElementById('username').value,
                password: document.getElementById('password').value})}> signup </button> */}
            <div style={{width:'100vw', overflow:'hidden'}}>
             <div className="background">
                 <div className="text-background-1">
                     <div className="text-1">WOR</div>
                 </div>
                 <div className="text-background-2">
                    <div className="text-2">KER</div>
                 </div>

                <div className="signup-area">
                    <div class="sign-up-text">Sign up</div>
                        <table className='signup' style={{tableLayout:'fixed', width:'100%'}}>
                            <tbody>
                                <tr>
                                    <td><input id="signupFirstname" style={{color:'white'}} class="in" type="text" name="firstname" placeholder="Firstname"/></td>
                                    <td><input id="signupLastname" class="in" type="text" name="lastname" placeholder="Lastname"/></td>
                                </tr> 
                                <tr>
                                    <td><input id="signupDob" type="date" name="dateOfBirth" placeholder="Date of Bith"/></td>
                                    <td><input id="signupNationality" type="text" name="nationality" placeholder="Nationality"/></td>
                                </tr>
                                <tr>
                                    <td colSpan='2'>
                                        <textarea id="signupAddress" style={{width:'98%',height:'100px',resize:'none', borderRadius:'7px', backgroundColor:'black'}} placeholder="Address"></textarea>
                                    </td>
                                </tr>
                                {/* <div class="sector-line"></div> */}
                                <tr>
                                    <td><input id='signupUsername' type="text" name="username" placeholder="Username"/></td>
                                    <td><input id='signupEmail' type="email" name="e-mail" placeholder="E-mail"/></td>
                                </tr>
                                <tr>
                                    <td><input id='signupPassword' type="password" name="password1" placeholder="Password"/></td>
                                    <td><input type="password" name="password2" placeholder="Confirm Password"/></td>
                                </tr>
                                <tr>
                                    <td><button type="button" class="cancle" onClick={this.switchLogin} value="Cancle">Cancel</button></td>
                                    <td><button type="submit" class="log-in" onClick={this.signup}>Submit</button></td>
                                </tr>
                                
                            </tbody>
                        </table>
                </div>
                <div className="login-area">
                    <div className="login">
                        <div className="username">
                            <input type="text" id="loginUsername" placeholder="Username"/>
                        </div>
                    <div className="password">
                        <input type="password" id="loginPassword" placeholder="Password"/>
                    </div>
                        <div className="forgot">
                            <a href="http://">Forgot password?</a>
                        </div>
                        <div className="button-area">
                            <button type="submit" className="log-in" onClick={this.login}>Log in</button>
                            <button type="button" className="sign-up" onClick={this.switchSignup} value="Sign Up">Sign up</button>
                            {/* <div className="social-login">
                                <a href="#" className="login100-form-social-item flex-c-m bg1 ">
                                    <i className="fa fa-facebook-f" aria-hidden="true"></i>
                                </a>
                            </div> */}
                        </div>
                    
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login;