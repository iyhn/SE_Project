import React from 'react';
import '../App.css';
import api from '../api/api';
import HeaderContainer from './HeaderContainer';
import Loading from '../Components/Loading';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fetched: false
    }
  }

  componentDidMount (){
    api.profile().then( () =>  this.setState({fetched: true}));
  };

  render() {
    return (
      <div style={{backgroundColor : "rgb(250,246,237)", width: '100vw', height: '100vh'}}>
        {this.state.fetched ? '' : <Loading/>}
        <HeaderContainer/>
        
        <div style={{backgroundColor : "rgb(237,245,250)", width: '100vw', height: '100vh'}}>
          <div style={{display:'grid', gridTemplateColumns: 'auto auto auto auto',gridTemplateRows: 'auto', gridColumnGap:'20px', gridRowGap:'10px', width: '68%', height: '91%', margin:'0 auto', paddingTop: '7vh'}}>
            <div style={{backgroundColor : "white", boxShadow: '0px 1px 10px rgba(0,0,0,0.1)'}}>

            </div>
            <div style={{backgroundColor : "white", gridColumnStart:2, gridColumnEnd:4, boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'}}>

            </div>
            <div style={{backgroundColor : "white", boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'}}>

            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
