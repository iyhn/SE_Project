import React from 'react';
import './css/Profile.css';
import nuch from '../nuch.jpg';
import Cross from '../cross.png';
import moment from 'moment'
import api from '../api/api';
import './css/SuggestBox.css';

const cancel = (back) => {
    
    if(!document.getElementsByName('detail')[0].disabled){
        for(var i=0;i<document.getElementsByName('detail').length;i++){
            document.getElementsByName('detail')[i].disabled = 'true';
            document.getElementById('edit').innerHTML = 'Edit';
            document.getElementById('edit').style.backgroundColor = 'black';
        }
    }else {
        back({modal: null});
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
                cancel(setMainState);
            })
        })
    }
}

const Profile = ({closeModal, setMainState, ...props}) => {
    let state = JSON.parse(JSON.stringify(props));
    return (
            <div className='profile-page'>
                <div class="profile-area" >
                    <div style={{float:'right',zIndex:1000}} >
                        
                    </div>
                    <div class="profile-text">Profile</div>
                    <div class="info">
                        <div class="picture-profile">
                            <div style={{width:'200px', height:'200px', borderRadius:'50%', overflow:'hidden', marginRight:'20px', marginTop:'15px', marginLeft:'-10px'}}>
                                <img src={props.profile.picture} alt="Avatar" />
                            </div>
                        </div>

                        <div class="detail-area">
                            <div class="line-1">
                                <div class="row-header">First Name</div>
                                <div class="dataout">
                                    <input name='detail' disabled={true} value={props.profile.firstname} onChange={(e)=>{let tmp=props.profile;setMainState({profile: {...tmp,firstname:e.target.value}})}}></input>
                                </div>
                            </div>
                            <div class="sector-line"></div>
                            <div class="line-1">
                                <div class="row-header">Last Name</div>
                                <div class="dataout">
                                    <input name='detail' disabled={true} value={props.profile.lastname} onChange={(e)=>{let tmp=props.profile;setMainState({profile: {...tmp,lastname:e.target.value}})}}></input>
                                </div>
                            </div>
                            <div class="sector-line"></div>
                            <div class="line-1">
                                <div class="row-header">Date of Birth</div>
                                <div class="dataout">
                                    <input name='detail' disabled={true} value={moment(props.profile.dob).format('DD/MM/YYYY')} onChange={(e)=>{let tmp=props.profile;setMainState({profile: {...tmp,dob:e.target.value}})}}></input>
                                </div>
                            </div>
                            <div class="sector-line"></div>
                            <div class="line-1">
                                <div class="row-header">Nationality</div>
                                <div class="dataout">
                                <input name='detail' disabled={true} value={props.profile.nationality} onChange={(e)=>{let tmp=props.profile;setMainState({profile: {...tmp,nationality:e.target.value}})}}></input>
                                </div>
                            </div>
                            <div class="sector-line"></div>
                            <div class="line-1">
                                <div class="row-header">Email</div>
                                <div class="dataout">
                                    <input name='detail' disabled={true} value={props.profile.email} onChange={(e)=>{let tmp=props.profile;setMainState({profile: {...tmp,email:e.target.value}})}}></input>
                                </div>
                            </div>
                            <div class="sector-line"></div>
                            <div class="line-1">
                                <div class="row-header">Address</div>
                                <div class="dataout">
                                    <input name='detail' disabled={true} value={props.profile.address} onChange={(e)=>{let tmp=props.profile;setMainState({profile: {...tmp,address:e.target.value}})}}></input>
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
                        <button type="button" class="cancel" onClick={()=>cancel(setMainState)} value="Cancel">Cancel</button>
                        <button id='edit' type="button" class="edit" onClick={()=>edit(setMainState,closeModal)}>Edit</button>
                    </div>

                </div>

                <div className='historypart'>
                    <div className='profilereviewbox'>
                        <div className='profilereviewheader'>
                            Review History
                        </div>
                        <div className='historybox'>
                            <div style={{position: 'relative'}}>
                            <div className='profileboxshape'>
                                <div className='profileeachbox'>
                                    <div className='profiletopic'>Task name
                                    </div>
                                    <div className='reviewDetail'>
                                        Detail skdjnvgklsfmg;lsgmlskrgm;dmkajnsfjkbndsfgnaelnglakfngkjafdglssdamvjnklsdnbklwndbksndkjnsdjknskjfdslkdnvbl;scmsdlkDetail skdjnvgklsfmg;lsgmlskrgm;dmkajnsfjkbndsfgnaelnglakfngkjafdglssdamvjnklsdnbklwndbksndkjnsdjknskjfdslkdnvbl;scmsdlkDetail skdjnvgklsfmg;lsgmlskrgm;dmkajnsfjkbndsfgnaelnglakfngkjafdglssdamvjnklsdnbklwndbksndkjnsdjknskjfdslkdnvbl;scmsdlkDetail skdjnvgklsfmg;lsgmlskrgm;dmkajnsfjkbndsfgnaelnglakfngkjafdglssdamvjnklsdnbklwndbksndkjnsdjknskjfdslkdnvbl;scmsdlkDetail skdjnvgklsfmg;lsgmlskrgm;dmkajnsfjkbndsfgnaelnglakfngkjafdglssdamvjnklsdnbklwndbksndkjnsdjknskjfdslkdnvbl;scmsdlk
                                    </div>
                                </div>
                            </div>
                            </div>

                            <div style={{position: 'relative'}}>
                            <div className='profileboxshape'>
                                <div className='profileeachbox'>
                                    <div className='profiletopic'>Task name
                                    </div>
                                    <div className='reviewDetail'>
                                        GodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGodGod
                                    </div>
                                </div>
                            </div>
                            </div>

                            <div style={{position: 'relative'}}>
                            <div className='profileboxshape'>
                                <div className='profileeachbox'>
                                    <div className='profiletopic'>Task name
                                    </div>
                                    <div className='reviewDetail'>
                                        lakfnbekljqefan;lkdhbmajoperfmngjvierahseuojvgamoptbanop[jniasjbkl;ksgonkjsorergknadfknhaergiuaerbgualngiorhaghearigaekjgnv
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='profiletaskbox'>
                        <div className='profiletaskheader'>
                            Task History
                        </div>
                        <div className='historybox'>
                            <div style={{position: 'relative'}}>
                            <div className='profileboxshape'>
                                <div className='profileeachbox'>
                                    <div className='profiletopic'>Task name
                                    </div>
                                    <div className='reviewDetail'>
                                        <div>Task :</div>
                                        <div>position :</div>
                                        <div>Wage :</div>
                                        <div>Detail :</div>
                                        <div>Status :</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div style={{position: 'relative'}}>
                            <div className='profileboxshape'>
                                <div className='profileeachbox'>
                                    <div className='profiletopic'>Task name
                                    </div>
                                    <div className='reviewDetail'>
                                        <div>Task :</div>
                                        <div>position :</div>
                                        <div>Wage :</div>
                                        <div>Detail :</div>
                                        <div>Status :</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div style={{position: 'relative'}}>
                            <div className='profileboxshape'>
                                <div className='profileeachbox'>
                                    <div className='profiletopic'>Task name
                                    </div>
                                    <div className='reviewDetail'>
                                        <div>Task :</div>
                                        <div>position :</div>
                                        <div>Wage :</div>
                                        <div>Detail :</div>
                                        <div>Status :</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div style={{position: 'relative'}}>
                            <div className='profileboxshape'>
                                <div className='profileeachbox'>
                                    <div className='profiletopic'>Task name
                                    </div>
                                    <div className='reviewDetail'>
                                        <div>Task :</div>
                                        <div>position :</div>
                                        <div>Wage :</div>
                                        <div>Detail :</div>
                                        <div>Status :</div>
                                    </div>
                                </div>
                            </div>
                            </div>                
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Profile;