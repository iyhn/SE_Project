import React from 'react';
import Twitter from '../hat.png';
import Logout from '../logout.png';

const Header = ({onLogout}) => (
    <div style={{position: 'fixed', backgroundColor : "white", width: '100vw', height: '53px', boxShadow: '0px 1px 10px rgba(0,0,0,0.15)',zIndex:1000}}>
          <div style={{position: 'relative', height:'100%', width: '1125px', margin:'0 auto'}}>
            <img src={Twitter} style={{width: '50px', position: 'absolute', left: '50%', top:'50%', transform:'translateX(-50%)',transform:'translateY(-50%)'}}/>
            <div style={{float:'right'}}> <img src={Logout} onClick={onLogout} style={{width:'20px', marginTop:'15px'}}></img> </div>
          </div>
          
    </div>
)

export default Header;