import React from 'react';
import '../componentscss/Loading.css'

const Loading = () => (
    <div style={{zIndex:100, position:'fixed', width:'100vw', height:'100vh', backgroundColor:'rgba(0,0,0,0.5)'}}>
        <div style={{position:'absolute', left:'50%', top:'50%'}}>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
)

export default Loading;