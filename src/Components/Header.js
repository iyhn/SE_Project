import React from 'react';
import Twitter from '../hat.png';
import Logout from '../logout.png';
import Search from '../search.png';
import './css/Header.css'

const Header = ({search,onLogout}) => (
    <div style={{position: 'fixed', backgroundColor : "white", width: '100vw', height: '53px', boxShadow: '0px 1px 10px rgba(0,0,0,0.15)',zIndex:1000}}>
          <div style={{position: 'relative', height:'100%', width: '1125px', margin:'0 auto'}}>
            <div style={{position:'absolute',top:'50%',transform:'translateY(-50%)'}}>
              <img src={Search} style={{position:'absolute', width:'20px', left:'240px', top:'3px'}}/>
              <input onChange={search} id="searchInput" style={{width:'220px',height:'25px', borderRadius:'7px',padding:'0px 40px 0px 10px', border:'1px solid', borderColor:'rgba(0,0,0,0.4)'}}></input>
            </div>
            <img src={Twitter} style={{width: '50px', position: 'absolute', left: '50%', top:'50%', transform:'translateX(-50%)translateY(-50%)'}}/>
            <div style={{float:'right'}}> <img className='logoutImg' src={Logout} onClick={onLogout} style={{width:'20px', marginTop:'15px'}}></img> </div>
          </div>
          
    </div>
)

export default Header;