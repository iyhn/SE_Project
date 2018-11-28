import React from 'react';
import './css/SuggestBox.css';

const List = (viewTask,viewProfile,props) => {
    return <div style={{position: 'relative'}}>
                <div className='boxshape'>

                    <div className='eachbox'>
                        <div className='picbox'>
                                <img onClick={()=>viewProfile(props.id)} src={props.picture} className='picAuthor cursor'/>
                        </div>
                        <div className='tasktopic'>
                            <span className='cursor' onClick={()=>viewTask(props.taskID)}>{props.topic}</span><br/>
                            {'Wage : '+props.wage}
                        </div>
                    </div>
                </div>
            </div>
}

const makeList = (viewTask,viewProfile,props) => {
    let result = [];
    for (let i in props){
        if(i%3===0) result.push(List(viewTask,viewProfile,props[i]))
    }
    return <div>
        {result}
    </div>
}

const SuggestBox = ({viewTask,viewProfile,openModal,...props}) => (
    <div>
        <div className='taskboxheader'>
                Suggestion Task
        </div>
        
        <div className='taskbox'>
            {makeList(viewTask,viewProfile,props)}
        </div>
    </div>
)

export default SuggestBox;