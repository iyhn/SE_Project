import React from 'react';
import '../App.css';
import api from '../api/api';
import HeaderContainer from './HeaderContainer';
import Loading from '../Components/componentsjs/Loading';
import ProfileBox from '../Components/componentsjs/ProfileBox';
import SearchBox from '../Components/componentsjs/SearchBox';
import './Home.css';
import Profile from '../Components/componentsjs/Profile';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fetched: true
    }
  }

  componentWillMount (){
    console.log(localStorage.getItem('id'))
    api.profile(localStorage.getItem('id')).then( (res) => {
      res.json().then(body=>{
        if(body === 'jwt expired'){
          api.redirectLogin();
        }
        this.setState({fetched: true,...body})
       
      })
    })
   
  };

  setMainState = (state) => {
    this.setState(state)
  }

  viewProfile = () => {
    document.getElementsByClassName('homePage')[0].style.left = '0';
  }

  back = () => {
    console.log('asdjnaskjdn')
    document.getElementsByClassName('homePage')[0].style.left = '-100vw';
  }

  render() {
    return (
      <div style={{backgroundColor : "rgb(250,246,237)", width: '100vw', height: '100vh'}}>
        {this.state.fetched ? null : <Loading/>}
        <HeaderContainer/>
        <div style={{width:'100vw', overflow:'hidden'}}>
          <div className='homePage'>
            <div className='profileContainer'>
              <Profile {...this.state} back={this.back} setMainState={this.setMainState}/>
            </div>
            <div className='midContainer'>
              <div className='container'>
                <div className='leftContainer'>
                  <div className='profilebox'>
                    <ProfileBox {...this.state} viewProfile={this.viewProfile}/>
                  </div>
                  <div className='recommendtask'>
                  
                  </div>
                </div>
                <div className='bodyContainer'>
                  <div>
                    <SearchBox/>
                  </div>
                </div>
                <div className='rightContainer'>
                  <div className='recommend'>

                  </div>
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
