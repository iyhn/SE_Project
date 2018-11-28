import React from 'react';

const Modal = ({component: Component, closeModal, ...props}) => (
    <div className='all' id='modal' onClick={closeModal} style={{position:'fixed', width:'100vw', height:'100vh', left:0, top:0, backgroundColor:'rgba(0,0,0,0.5)', zIndex:10000, transition: '0.2s', opacity:0,overflow:'scroll'}}>
            <Component {...props} />    
    </div>
)

export default Modal;