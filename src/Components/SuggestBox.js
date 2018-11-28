import React from 'react';
import './css/SuggestBox.css';

const List = (viewProfile,props) => {
    return <div style={{position: 'relative'}}>
                <div className='boxshape'>

                    <div className='eachbox'>
                        <div className='picbox'>
                                <img onClick={()=>viewProfile(props.id)} src={props.picture} className='picAuthor cursor'/>
                        </div>
                        <div className='tasktopic'>
                            {props.topic}<br/>
                            {'Wage : '+props.wage}
                        </div>
                    </div>
                </div>
            </div>
}

const makeList = (viewProfile,props) => {
    let result = [];
    for (let i in props){
        if(i%3===0) result.push(List(viewProfile,props[i]))
    }
    return <div>
        {result}
    </div>
}

const SuggestBox = ({viewProfile,openModal,...props}) => (
    <div>
        <div className='taskboxheader'>
                Suggestion Task
        </div>
        
        <div className='taskbox'>
            {makeList(viewProfile,props)}
        </div>
    </div>
)

export default SuggestBox;