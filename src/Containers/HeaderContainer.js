import React from 'react';
import api from '../api/api';
import Header from '../Components/componentsjs/Header';

class HeaderContainer extends React.Component{
    render(){
        return <Header onLogout={api.logout}/>
    }
}

export default HeaderContainer;