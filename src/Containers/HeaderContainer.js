import React from 'react';
import api from '../api/api';
import Header from '../Components/Header';

class HeaderContainer extends React.Component{
    constructor(props) {
      super(props);
      
    }

    search = () => {
        api.search(document.getElementById('searchInput').value).then((res)=>{
          res.json().then(body=>{
            if(body === 'jwt expired'){
              api.redirectLogin();      }
            this.props.setMainState({fetched: true,task:body})
          })
        })
      }

    render(){
        return <Header search={this.search} onLogout={api.redirectLogin}/>
    }
}

export default HeaderContainer;