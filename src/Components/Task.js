import React from 'react';
import nuch from '../nuch.jpg';
import Cross from '../cross.png';
import moment from 'moment'
import api from '../api/api';
import './css/Task.css';


const Task = ({back, setMainState, ...props}) => {
    return (
            <div class="Task-area" >
                <div style={{float:'right',zIndex:1000}} ></div>
                <div class="task-text">Task</div>
                <div class="info">
                    <div class="detail-area">
                        <div class="sector-line"></div>
                        <div class="line-1">
                            <div class="row-header">Topic</div>
                                <div class="dataout">
                                    <input name='detail' disabled={true} value={props.task.topic} onChange={(e)=>{setMainState({topic: e.target.value})}}></input>
                                </div>
                        </div>
                        <div class="sector-line"></div>
                        <div class="line-1">
                            <div class="row-header">Wage</div>
                                <div class="dataout">
                                    <input name='detail' disabled={true} value={props.task.wage} onChange={(e)=>{setMainState({wage: e.target.value})}}></input>
                                </div>
                        </div>
                        <div class="sector-line"></div>
                        <div class="line-1">
                            <div class="row-header">Position</div>
                                <div class="dataout">
                                    <input name='detail' disabled={true} value={props.task.position} onChange={(e)=>{setMainState({position: e.target.value})}}></input>
                                </div>
                        </div>
                        <div class="sector-line"></div>
                        <div class="line-1">
                            <div class="row-header">Detail</div>
                                <div class="dataout">
                                    <input name='detail' disabled={true} value={props.task.description} onChange={(e)=>{setMainState({description: e.target.value})}}></input>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Task;