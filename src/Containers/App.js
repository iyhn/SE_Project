import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor : "rgb(250,246,237)", width: '100vw', height: '100vh'}}>

        <div style={{position: 'fixed', backgroundColor : "white", width: '100vw', height: '8vh', boxShadow: '0px 1px 10px rgba(0,0,0,0.2)'}}>

        </div>
        
        <div style={{backgroundColor : "rgb(250,246,237)", width: '100vw', height: '100vh'}}>
          <div style={{display:'grid', gridTemplateColumns: 'auto auto auto auto',gridTemplateRows: 'auto', gridColumnGap:'10px', gridRowGap:'10px', width: '66%', height: '91%', margin:'0 auto', paddingTop:'9vh'}}>
            <div style={{backgroundColor : "yellow" }}>

            </div>
            <div style={{backgroundColor : "pink", gridColumnStart:2, gridColumnEnd:4}}>

            </div>
            <div style={{backgroundColor : "purple"}}>

            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
