import React from 'react';
import Twitter from '../twitter.png';

const Header = ({onLogout}) => (
    <div style={{position: 'fixed', backgroundColor : "white", width: '100vw', height: '6vh', boxShadow: '0px 1px 10px rgba(0,0,0,0.15)'}}>
          <div style={{position: 'relative', height:'100%', width: '1100px', margin:'0 auto'}}>
            <img src={Twitter} style={{width: '25px', position: 'absolute', left: '50%', top:'50%', transform:'translateX(-50%)',transform:'translateY(-50%)'}}/>
            <div style={{float:'right'}}> <button onClick={onLogout}>logout</button> </div>
          </div>
          
    </div>
)

export default Header;