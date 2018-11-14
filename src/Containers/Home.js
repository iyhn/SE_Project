import React from 'react';
import '../App.css';
import api from '../api/api';
import HeaderContainer from './HeaderContainer';
import Loading from '../Components/componentsjs/Loading';
import ProfileBox from '../Components/componentsjs/ProfileBox';
import './Home.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fetched: true
    }
  }

  componentDidMount (){
   // api.profile().then( () => this.setState({fetched: true}));
  };

  render() {
    return (
      <div style={{backgroundColor : "rgb(250,246,237)", width: '100vw', height: '100vh'}}>
        {this.state.fetched ? null : <Loading/>}
        <HeaderContainer/>
        
        <div class='homePage'>
          <div class='container'>
            <div class='subcontainer'>
              <div class='profilebox'>
                <ProfileBox/>
              </div>
              <div class='recommendtask'>

              </div>
            </div>
            <div class='bodybox'>

            </div>
            <div class='recommendCom'>

            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
