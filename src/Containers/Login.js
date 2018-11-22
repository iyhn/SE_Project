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
            dob: document.getElementById('date').value,
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
                                    <td>
                                        <div className="divSignupInput">
                                            <input id='signupUsername' type="text" name="username" placeholder="&nbsp;"/>
                                            <span className="placeholder">Username</span>
                                            <span className="border"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="divSignupInput">
                                            <input id='signupEmail' type="email" name="e-mail" placeholder="&nbsp;"/>
                                            <span className="placeholder">Email</span>
                                            <span className="border"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="divSignupInput">
                                            <input id='signupPassword' type="password" name="password1" placeholder="&nbsp;"/>
                                            <span className="placeholder">Password</span>
                                            <span className="border"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="divSignupInput">
                                            <input type="password" name="password2" placeholder="&nbsp;"/>
                                            <span className="placeholder">Confirm Password</span>
                                            <span className="border"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="divSignupInput">
                                            <input id="signupFirstname" style={{color:'black'}} class="in" type="text" name="firstname"placeholder="&nbsp;"/>
                                            <span className="placeholder">Firstname</span>
                                            <span className="border"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="divSignupInput">
                                            <input id="signupLastname" class="in" type="text" name="lastname"placeholder="&nbsp;"/>
                                            <span className="placeholder">Lastname</span>
                                            <span className="border"></span>
                                        </div>
                                    </td>
                                </tr> 
                                <tr>
                                    <td>
                                        <div className="divSignupInput">
                                            <input id="signupDob" type="text" name="dateOfBirth"placeholder="&nbsp;" id='date' onFocus={()=>document.getElementById('date').type='date'}/>
                                            <span className="placeholder">Date of birth</span>
                                            <span className="border"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="divSignupInput">
                                            <input id="signupNationality" type="text" name="nationality"placeholder="&nbsp;" />
                                            <span className="placeholder">Nationality</span>
                                            <span className="border"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan='2'>
                                        <textarea id="signupAddress" placeholder="&nbsp;"></textarea>
                                        <span className="placeholderT">Address</span>
                                    </td>
                                </tr>
                                {/* <div class="sector-line"></div> */}
                                
                                <tr>
                                    <td>
                                        <div className="divSignupInput">
                                            
                                        </div>
                                    </td>
                                    <td>
                                        <div className="divSignupButton">
                                            <button type="submit" class="submit" onClick={this.signup}>Submit</button>
                                            <button type="button" class="cancel2" onClick={this.switchLogin} value="Cancel">Cancel</button>
                                          
                                        </div>
                                    </td>
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