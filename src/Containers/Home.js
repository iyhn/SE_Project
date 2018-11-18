import React from 'react';
import '../App.css';
import api from '../api/api';
import HeaderContainer from './HeaderContainer';
import Loading from '../Components/Loading';
import ProfileBox from '../Components/ProfileBox';
import SearchBox from '../Components/SearchBox';
import Modal from './Modal';
import './Home.css';
import Profile from '../Components/Profile';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fetched: true,
      modal: null
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

  openModal = (component) => {
    this.setState({modal: component}, ()=> setTimeout(() => {
      (document.getElementById('modal').style.opacity=1)
    }, 1));
  }

  closeModal = (e) => {
    if(e.target == document.getElementById('modal')){
      this.setState({modal: null});

    }
  }

  render() {
    return (
      <div style={{backgroundColor : "rgb(250,246,237)", width: '100vw', height: '100vh'}}>
        {this.state.fetched ? null : <Loading/>}
        {this.state.modal ? <Modal component={this.state.modal} closeModal={this.closeModal} {...this.state}/> : null}
        <HeaderContainer/>
        <div style={{width:'100vw', overflow:'hidden'}}>
          <div className='homePage'>
            {/* <div className='profileContainer'>
              <Profile {...this.state} back={this.back} setMainState={this.setMainState}/>
            </div> */}
            <div className='midContainer'>
              <div className='container'>
                <div className='leftContainer'>
                  <div className='profilebox'>
                    <ProfileBox {...this.state} openModal={this.openModal}/>
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
