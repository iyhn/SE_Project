import React from 'react';
import './css/Profile.css';
import nuch from '../nuch.jpg';
import Cross from '../cross.png';
import star from '../star.png';
import moment from 'moment'
import api from '../api/api';
import './css/SuggestBox.css';

const ListH = (props) => {
    return <div style={{position: 'relative'}}>
    <div className='profileboxshape'>
        <div className='profileeachbox'>
            <div className='profiletopic'>{props.topic}</div>
            <div className='reviewDetail'>
                <div>position : {props.position}</div>
                <div>Wage : {props.wage}</div>
                <div>Detail : {props.taskDes}</div>
            </div>
        </div>
    </div>
    </div>
}

const List = (props) => {
    return <div style={{position: 'relative'}}>
    <div className='profileboxshape'>
        <div className='profileeachbox'>
            <div className='picboxIn2'>
                <img src={props.picture} className='picAuthorIn2'/>
            </div>
            <div className='reviewDetail'>
                <span style={{fontWeight:'bold', fontSize:'1.3em'}}>Score: </span>{props.score}<br/>
                Description: {props.description}
            </div>
        </div>
    </div>
    </div>
}

const makeReviewList = (props,type) => {
    let result = [];
    for (let i in props){
        if(type=='review')result.push(List(props[i]))
        else if(type=='history')result.push(ListH(props[i]))
    }
    return <div>
        {result}
    </div>
}

const ViewProfileModal = ({closeModal, setMainState, ...props}) => {
    let state = JSON.parse(JSON.stringify(props));
    return (
            <div className='profile-page'>
                <div class="profile-area" >
                    <div style={{padding:'30px',position:'absolute',width:'auto',height:'100px',top:'320px',fontSize:'2em',lineHeight:'100px',verticalAlign:'middle',textAlign:'center'}}>
                        {props.targetProfile.reviewScore.toFixed(1)} <img src={star} style={{position:'relative',left:'-20px',top:'35px',height:'100px'}}></img>
                    </div>
                    <div class="profile-text">Profile</div>
                    <div class="info">
                        <div class="picture-profile">
                            <div style={{width:'200px', height:'200px', borderRadius:'50%', overflow:'hidden', marginRight:'20px', marginTop:'15px', marginLeft:'-10px'}}>
                                <img src={props.targetProfile.picture} style={{height:'200px'}} alt="Avatar" />
                            </div>
                        </div>

                        <div class="detail-area">
                            <div class="line-1">
                                <div class="row-header">First Name</div>
                                <div class="dataout">
                                    <input name='detail' disabled={true} value={props.targetProfile.firstname} ></input>
                                </div>
                            </div>
                            <div class="sector-line"></div>
                            <div class="line-1">
                                <div class="row-header">Last Name</div>
                                <div class="dataout">
                                    <input name='detail' disabled={true} value={props.targetProfile.lastname} ></input>
                                </div>
                            </div>
                            <div class="sector-line"></div>
                            <div class="line-1">
                                <div class="row-header">Date of Birth</div>
                                <div class="dataout">
                                    <input name='detail' disabled={true} value={moment(props.targetProfile.dob).format('DD/MM/YYYY')} ></input>
                                </div>
                            </div>
                            <div class="sector-line"></div>
                            <div class="line-1">
                                <div class="row-header">Nationality</div>
                                <div class="dataout">
                                <input name='detail' disabled={true} value={props.targetProfile.nationality} ></input>
                                </div>
                            </div>
                            <div class="sector-line"></div>
                            <div class="line-1">
                                <div class="row-header">Email</div>
                                <div class="dataout">
                                    <input name='detail' disabled={true} value={props.targetProfile.email}></input>
                                </div>
                            </div>
                            <div class="sector-line"></div>
                            <div class="line-1">
                                <div class="row-header">Address</div>
                                <div class="dataout">
                                    <input name='detail' disabled={true} value={props.targetProfile.address} ></input>
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
                </div>

                <div className='historypart'>
                    <div className='profilereviewbox'>
                        <div className='profilereviewheader'>
                            Review History
                        </div>
                        <div className='historybox'>
                            {makeReviewList(props.targetProfile.review,'review')}
                        </div>
                    </div>
                </div>
                <div className='historypart h'>
                    <div className='profiletaskbox'>
                        <div className='profiletaskheader'>
                            Task History
                        </div>
                        <div className='historybox'>
                        {makeReviewList(props.targetProfile.review,'history')}          
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ViewProfileModal;