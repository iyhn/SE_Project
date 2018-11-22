import React from 'react';
import './css/SuggestBox.css';
import nuch from '../nuch.jpg';
import star from '../star.png';
import Task from './Task';

const SuggestBox = ({openModal,...props}) => (
    <div style={{position: 'relative'}}>
        <div style={{position: 'absolute', left:0, top:0, height: '300px', width:'300px', overflow: 'hidden', borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}}>
            <div className="editHover" onClick={()=>openModal(Task)} onClick={console.log(props.wage)}>
            </div>
            <div style={{position: 'absolute',width:'100%', left:0, top:0, height: '300px',width:'300px', backgroundColor:'lightgreen', borderBottomLeftRadius:'7px',borderBottomRightRadius:'7px', textAlign:'center', verticalAlign:'middle', lineHeight: '75px', fontSize:'1.1em'}}>
                {props[0].wage+' '+props[0].position}
            </div>
        </div>
    </div>
)

export default SuggestBox;