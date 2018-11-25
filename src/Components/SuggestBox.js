import React from 'react';
import './css/SuggestBox.css';
import nuch from '../nuch.jpg';
import star from '../star.png';
import Task from './Task';

const SuggestBox = ({openModal,...props}) => (
    <div>
        <div className='taskboxheader'>
            <div className='taskheadertext'>
                SUGGESTION TASK
            </div>
        </div>
        
        <div className='taskbox'>
            <div style={{position: 'relative'}}>
                <div className='boxshape'>
                    <div className="taskeditHover" onClick={()=>openModal(Task)}>
                    </div>
                    <div className='eachbox'>
                        <div className='tasktopic'>{props[0].topic}
                            <div className='picbox'>
                                <img src={props[0].picture} className='picAuthor'/>
                            </div>
                        </div>
                        <div className='taskwage'>{'Wage : '+props[0].wage}</div>
                    </div>
                </div>
            </div>
            <div style={{position: 'relative'}}>
                <div className='boxshape'>
                    <div className="taskeditHover" onClick={()=>openModal(Task)}>
                    </div>
                    <div className='eachbox'>
                        <div className='tasktopic'>
                            {props[1].topic}
                            <div className='picbox'>
                                <img src={props[1].picture} className='picAuthor'/>
                            </div>
                        </div>
                        <div className='taskwage'>{'Wage : '+props[1].wage}</div>
                    </div>
                </div>
            </div>
            <div style={{position: 'relative'}}>
                <div className='boxshape'>
                    <div className="taskeditHover" onClick={()=>openModal(Task)}>
                    </div>
                    <div className='eachbox'>
                        <div className='tasktopic'>
                            {props[2].topic}
                            <div className='picbox'>
                                <img src={props[2].picture} className='picAuthor'/>
                            </div>
                        </div>
                        <div className='taskwage'>{'Wage : '+props[2].wage}</div>
                    </div>
                </div>
            </div>
            <div style={{position: 'relative'}}>
                <div className='boxshape'>
                    <div className="taskeditHover" onClick={()=>openModal(Task)}>
                    </div>
                    <div className='eachbox'>
                        <div className='tasktopic'>
                            {props[2].topic}
                            <div className='picbox'>
                                <img src={props[2].picture} className='picAuthor'/>
                            </div>
                        </div>
                        <div className='taskwage'>{'Wage : '+props[2].wage}</div>
                    </div>
                </div>
            </div>
            <div style={{position: 'relative'}}>
                <div className='boxshape'>
                    <div className="taskeditHover" onClick={()=>openModal(Task)}>
                    </div>
                    <div className='eachbox'>
                        <div className='tasktopic'>
                            {props[2].topic}
                            <div className='picbox'>
                                <img src={props[2].picture} className='picAuthor'/>
                            </div>
                        </div>
                        <div className='taskwage'>{'Wage : '+props[2].wage}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default SuggestBox;