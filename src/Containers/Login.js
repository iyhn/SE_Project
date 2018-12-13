import React from 'react';
import api from '../api/api';
import './Login.css'

class Login extends React.Component{

    checkRequired = (e) => {
        console.log(e.target.value !=null);
        console.log(e.target.classList);
        if(document.getElementById(e.target.id + 'Placeholder')){
            if(e.target.value =='') {
                document.getElementById(e.target.id + 'Placeholder').classList.add('red');
                document.getElementById(e.target.id + 'Border').classList.add('redborder');
            }else {
                document.getElementById(e.target.id + 'Placeholder').classList.remove('red');
                document.getElementById(e.target.id + 'Border').classList.remove('redborder');
            }
        }   
    }

    checkConfirmPassword = () => {
        if(document.getElementById('confirmPassword').value != document.getElementById('signupPassword').value){
            document.getElementById('confirmPassword' + 'Placeholder').classList.add('red');
            document.getElementById('confirmPassword' + 'Border').classList.add('redborder');
        }else {
            document.getElementById('confirmPassword' + 'Placeholder').classList.remove('red');
            document.getElementById('confirmPassword' + 'Border').classList.remove('redborder');
        }
    }

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
        let required = false;
        for(const i in document.getElementsByName('signup')){
            if(document.getElementsByName('signup')[i].value==='') {
                if(document.getElementById(document.getElementsByName('signup')[i].id + 'Placeholder')){
                    document.getElementById(document.getElementsByName('signup')[i].id + 'Placeholder').classList.add('red');
                    document.getElementById(document.getElementsByName('signup')[i].id + 'Border').classList.add('redborder');
                }
                required=true;
            }
        }
        if(required)return alert("Please fill all required field")
        if(document.getElementById('confirmPassword').value!=document.getElementById('signupPassword').value) return alert("Confirm Password didn't match")
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
                                    <td>
                                        <div className="divSignupInput">
                                            <input onChange={(e)=>this.checkRequired(e)} id='signupUsername' type="text" name="signup" placeholder="&nbsp;"/>
                                            <span id='signupUsernamePlaceholder' className="placeholder">Username</span>
                                            <span id='signupUsernameBorder' className="border"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="divSignupInput">
                                            <input onChange={(e)=>this.checkRequired(e)} id='signupEmail' type="email" name="signup" placeholder="&nbsp;"/>
                                            <span id='signupEmailPlaceholder' className="placeholder">Email</span>
                                            <span id='signupEmailBorder' className="border"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="divSignupInput">
                                            <input onChange={(e)=>this.checkRequired(e)} id='signupPassword' type="password" name="signup" placeholder="&nbsp;"/>
                                            <span id='signupPasswordPlaceholder' className="placeholder">Password</span>
                                            <span id='signupPasswordBorder' className="border"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="divSignupInput">
                                            <input onBlur={()=>this.checkConfirmPassword()} id='confirmPassword' type="password" placeholder="&nbsp;"/>
                                            <span id='confirmPasswordPlaceholder' className="placeholder">Confirm Password</span>
                                            <span id='confirmPasswordBorder' className="border"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="divSignupInput">
                                            <input onChange={(e)=>this.checkRequired(e)} id="signupFirstname" style={{color:'black'}} class="in" type="text" name="signup"placeholder="&nbsp;"/>
                                            <span id='signupFirstnamePlaceholder' className="placeholder">Firstname</span>
                                            <span id='signupFirstnameBorder' className="border"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="divSignupInput">
                                            <input onChange={(e)=>this.checkRequired(e)} id="signupLastname" class="in" type="text" name="signup"placeholder="&nbsp;"/>
                                            <span id='signupLastnamePlaceholder' className="placeholder">Lastname</span>
                                            <span id='signupLastnameBorder' className="border"></span>
                                        </div>
                                    </td>
                                </tr> 
                                <tr>
                                    <td>
                                        <div className="divSignupInput">
                                            <input id="signupDob" type="text" name="signup"placeholder="&nbsp;" onFocus={()=>document.getElementById('signupDob').type='date'}/>
                                            <span id='signupDobPlaceholder' className="placeholder">Date of birth</span>
                                            <span id='signupDobBorder' className="border"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="divSignupInput">
                                            <input onChange={(e)=>this.checkRequired(e)} id="signupNationality" type="text" name="signup"placeholder="&nbsp;" />
                                            <span id='signupNationalityPlaceholder' className="placeholder">Nationality</span>
                                            <span id='signupNationalityBorder' className="border"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan='2'>
                                        <textarea name='signup' id="signupAddress" placeholder="&nbsp;"></textarea>
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