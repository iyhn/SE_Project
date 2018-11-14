import React from 'react';
import '../componentscss/Profile.css';
import nuch from '../../nuch.jpg';

const ProfileBox = () => (
    <div style={{padding:'20px'}}>
        <div style={{position:'relative', width:'30%', height:'69px', display:'inline-block', overflow:'hidden', borderRadius:'50%'}}>
            <img src={nuch} style={{width:'80px' }}/>
           
        </div>
        <div style={{position:'relative',height:'69px', width:'70%', display:'inline-block'}}>
         
        </div>
        
    </div>
)

export default ProfileBox;