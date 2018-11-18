import React from 'react';
import profile from './Profile';
import './css/ProfileBox.css';
import nuch from '../nuch.jpg';
import star from '../star.png';

const ProfileBox = ({openModal,...props}) => (
    <div style={{position: 'relative'}}>
        <div style={{position: 'absolute', left:0, top:0, height: '200px', overflow: 'hidden', borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}}>
            <div className="editHover" onClick={()=>openModal(profile)}> </div>
            <img src={props.picture} style={{width:'100%'}}/>
        </div>
        <div style={{position: 'absolute',width:'100%', left:0, top:'200px', height: '75px', backgroundColor:'white', borderBottomLeftRadius:'7px',borderBottomRightRadius:'7px', textAlign:'center', verticalAlign:'middle', lineHeight: '75px', fontSize:'1.1em'}}>
           {props.firstname+' '+props.lastname}
        </div>

        {/* <div style={{position: 'absolute', left:0, top:0, height: '200px', overflow: 'hidden', borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}}>
            <div className="editHover" onClick={() => {
                document.getElementById('test').style.width = '1125px'
                document.getElementById('test').style.height = '600px'
                }}></div>
            <img src={props.picture} style={{width:'270px'}}/>
        </div>
        <div style={{position: 'absolute',width:'100%', left:0, top:'200px', height: '75px', backgroundColor:'white', borderBottomLeftRadius:'7px',borderBottomRightRadius:'7px', textAlign:'center', verticalAlign:'middle', lineHeight: '75px', fontSize:'1.1em'}}>
           {props.firstname+' '+props.lastname}
        </div> */}

        {/* <table style={{tableLayout: 'fixed', width:'100%'}}>
            <tbody>
                <tr>
                    <td>
                        <div onClick={viewProfile} style={{height:'72px', overflow:'hidden', borderRadius:'50%'}}>
                            <div className="editHover">
                                
                            </div>
                            <img src={props.picture} style={{width:'100%'}}/>
                        </div>
                    </td>
                    <td colSpan="2" style={{paddingLeft:'10px'}}>
                    {props.firstname} <br/> {props.lastname}
                   
                    </td>
                </tr>
                <tr>
                    <td>
                       
                    </td>
                    <td colSpan="2" style={{paddingLeft:'10px'}}>
                        3.1 <img src={star} style={{position:'relative',width:'20px', top:'2px'}}/>
                   
                    </td>
                </tr>
            </tbody>
        </table> */}
        
    </div>
)

export default ProfileBox;