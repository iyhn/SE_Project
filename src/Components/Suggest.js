import React from 'react';
import './css/Suggest.css';
import nuch from '../nuch.jpg';
import Cross from '../cross.png';
import moment from 'moment'
import api from '../api/api';

const cancel = (back) => {
    
    if(!document.getElementsByName('detail')[0].disabled){
        for(var i=0;i<document.getElementsByName('detail').length;i++){
            document.getElementsByName('detail')[i].disabled = 'true';
            document.getElementById('edit').innerHTML = 'Edit';
            document.getElementById('edit').style.backgroundColor = 'black';
        }
    }else {
        back();
    }
}

const edit = (setMainState,back) => {
    if(document.getElementsByName('detail')[0].disabled){
        for(var i=0;i<document.getElementsByName('detail').length;i++){
            document.getElementsByName('detail')[i].removeAttribute("disabled")
            document.getElementById('edit').innerHTML = 'Save';
            document.getElementById('edit').style.backgroundColor = 'green';
        }
    }else {
        api.editProfile(localStorage.getItem('id'),{
            firstname: document.getElementsByName('detail')[0].value,
            lastname: document.getElementsByName('detail')[1].value,
            dob: document.getElementsByName('detail')[2].value,
            nationality: document.getElementsByName('detail')[3].value,
            email: document.getElementsByName('detail')[4].value,
            address: document.getElementsByName('detail')[5].value
        }).then((res)=>{
            res.json().then((body)=>{
                setMainState(body)
                cancel(back);
                back();
            })
        })
    }
}

const Profile = ({back, setMainState, ...props}) => {
    let picpath = '../../' + 'code.jpg';
    return (
            <div class="profile-area" >
                <div style={{float:'right',zIndex:1000}} >
                    
                </div>
                <div class="profile-text">Profile</div>
                <div class="info">
                    <div class="picture-profile">
                        <div style={{width:'200px', height:'200px', borderRadius:'50%', overflow:'hidden', marginRight:'20px', marginTop:'15px', marginLeft:'-10px'}}>
                            <img src={props.picture} alt="Avatar" />
                        </div>
                    </div>

                    <div class="detail-area">
                        <div class="line-1">
                            <div class="row-header">First Name</div>
                            <div class="dataout">
                                <input name='detail' disabled={true} value={props.firstname} onChange={(e)=>{setMainState({firstname: e.target.value})}}></input>
                            </div>
                        </div>
                        <div class="sector-line"></div>
                        <div class="line-1">
                            <div class="row-header">Last Name</div>
                            <div class="dataout">
                                <input name='detail' disabled={true} value={props.lastname} onChange={(e)=>{setMainState({lastname: e.target.value})}}></input>
                            </div>
                        </div>
                        <div class="sector-line"></div>
                        <div class="line-1">
                            <div class="row-header">Date of Birth</div>
                            <div class="dataout">
                            <input name='detail' disabled={true} value={moment(props.dob).format('DD/MM/YYYY')} onChange={(e)=>{setMainState({dob: e.target.value})}}></input>
                            </div>
                        </div>
                        <div class="sector-line"></div>
                        <div class="line-1">
                            <div class="row-header">Nationality</div>
                            <div class="dataout">
                            <input name='detail' disabled={true} value={props.nationality} onChange={(e)=>{setMainState({nationality: e.target.value})}}></input>
                            </div>
                        </div>
                        <div class="sector-line"></div>
                        <div class="line-1">
                            <div class="row-header">Email</div>
                            <div class="dataout">
                                <input name='detail' disabled={true} value={props.email} onChange={(e)=>{setMainState({email: e.target.value})}}></input>
                            </div>
                        </div>
                        <div class="sector-line"></div>
                        <div class="line-1">
                            <div class="row-header">Address</div>
                            <div class="dataout">
                                <input name='detail' disabled={true} value={props.address} onChange={(e)=>{setMainState({address: e.target.value})}}></input>
                            </div>
                        </div>
                        <div class="sector-line"></div>
                        <div class="line-1">
                            <div class="row-header">Experience</div>
                            <div class="dataout">
                            </div>
                        </div>
                    </div>
                </div>



                <div class="buttom-area">
                    <button type="button" class="cancel" onClick={()=>cancel(back)} value="Cancel">Cancel</button>
                    <button id='edit' type="button" class="edit" onClick={()=>edit(setMainState,back)}>Edit</button>
                </div>

            </div>
    )
}

export default Profile;