import React from 'react';
import './css/SuggestBox.css';
import nuch from '../nuch.jpg';
import star from '../star.png';
import Task from './Task';

const List = (props) => {
    return <div style={{position: 'relative'}}>
                <div className='boxshape'>

                    <div className='eachbox'>
                        <div className='picbox'>
                                <img src={props.picture} className='picAuthor'/>
                        </div>
                        <div className='tasktopic'>
                            {props.topic}<br/>
                            {'Wage : '+props.wage}
                        </div>
                    </div>
                </div>
            </div>
}

const makeList = (props) => {
    let result = [];
    for (let i in props){
        if(i%3===0) result.push(List(props[i]))
    }
    return <div>
        {result}
    </div>
}

const SuggestBox = ({openModal,...props}) => (
    <div>
        <div className='taskboxheader'>
                Suggestion Task
        </div>
        
        <div className='taskbox'>
            {makeList(props)}
        </div>
    </div>
)

export default SuggestBox;