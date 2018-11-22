import React from 'react';
import '../App.css';
import api from '../api/api';
import HeaderContainer from './HeaderContainer';
import Loading from '../Components/Loading';
import ProfileBox from '../Components/ProfileBox';
import SuggestBox from '../Components/SuggestBox';
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
        this.setState({fetched: true,profile:body})
       
      })
    })
    api.fetchTask().then((res)=>{
      res.json().then(body=>{
        if(body === 'jwt expired'){
          api.redirectLogin();      }
        this.setState({fetched: true,task:body})
      })
    })
  };

  setMainState = (state) => {
    console.log('dd')
    this.setState(state,()=>console.log(this.state))
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

  
  
  reset = () =>{
    let list = document.getElementsByName('postInput');
    for(let i=0;i<list.length;i++){
        list[i].value=null;
    }
}

  render() {
    return (
      <div onClick={(e) => {if(e.target.name != 'postInput'){document.getElementById('search').style.height='75px';this.reset()}}} style={{backgroundColor : "rgb(237,245,250)", width: '100vw', height: '100vh'}}>
        {this.state.fetched ? null : <Loading/>}
        {this.state.modal ? <Modal setMainState={this.setMainState} component={this.state.modal} closeModal={this.closeModal} {...this.state}/> : null}
        <HeaderContainer setMainState={this.setMainState}/>
        <div style={{width:'100vw', overflow:'scroll'}}>
          <div className='homePage'>
            {/* <div className='profileContainer'>
              <Profile {...this.state} back={this.back} setMainState={this.setMainState}/>
            </div> */}
            <div className='midContainer'>
              <div className='container'>
                <div className='leftContainer'>
                  <div className='profilebox'>
                    <ProfileBox {...this.state.profile} openModal={this.openModal}/>
                  </div>
                  <div className='recommendtask'>
                  
                  </div>
                </div>
                <div className='bodyContainer'>
                  <div>
                    <SearchBox setMainState={this.setMainState} profilePic={this.state.profile? this.state.profile.picture:null} {...this.state.task} openModal={this.openModal}/>
                  </div>
                </div>
                <div className='rightContainer'>
                  <div >
                    {this.state.task==null ? null:<SuggestBox {...this.state.task} openModal={this.openModal}/>}
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
