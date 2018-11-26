import React from 'react';
import profile from './Profile';
import './css/ProfileBox.css';
import nuch from '../nuch.jpg';
import star from '../star.png';

const ProfileBox = ({openModal,...props}) => (
    <div style={{position: 'relative'}}>
        <div style={{position: 'absolute', left:0, top:0, height: '200px', overflow: 'hidden', borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}}>
            <div className="editHover" onClick={()=>openModal(profile)}> </div>
            <img src={props.picture} style={{width:'270px'}}/>
        </div>
        <div style={{position: 'absolute',width:'100%', left:0, top:'200px', height: '75px', backgroundColor:'white', borderBottomLeftRadius:'7px',borderBottomRightRadius:'7px', textAlign:'center', verticalAlign:'middle', lineHeight: '75px', fontSize:'1.1em'}}>
           {props.firstname+' '+props.lastname}
        </div>
    </div>
)

export default ProfileBox;