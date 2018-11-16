import React from 'react';
import '../componentscss/ProfileBox.css';
import nuch from '../../nuch.jpg';
import star from '../../star.png';

const ProfileBox = ({viewProfile,...props}) => (
    <div style={{padding:'20px'}}>
        <table style={{tableLayout: 'fixed', width:'100%'}}>
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
        </table>
        
    </div>
)

export default ProfileBox;