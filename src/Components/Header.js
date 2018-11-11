import React from 'react';
import Twitter from '../twitter.png';

const Header = () => (
    <div style={{position: 'fixed', backgroundColor : "white", width: '100vw', height: '6vh', boxShadow: '0px 1px 10px rgba(0,0,0,0.15)'}}>
          <div style={{position: 'relative', height:'100%', width: '68%', margin:'0 auto'}}>
            <img src={Twitter} style={{width: '70px', position: 'absolute', left: '50%', top: '50%', transform:'translateY(-50%)'}}/>

          </div>
    </div>
)

export default Header;