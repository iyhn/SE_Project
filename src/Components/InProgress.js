import React from 'react';
import api from '../api/api';
import Review from './Review';
import './css/InProgress.css';

const review = (props,id,setMainState,openModal,modal) => {
    api.profile(id)
    .then((res)=>{
        res.json().then(body=>{
            setMainState({reviewProfile:{task:props,...body}},()=>openModal(modal))      
          })
    })
}

const progressList = (viewTask,setMainState,openModal,props) => {
   
        return<div  style={{position:'relative',textAlign:'left',height:'55px',lineHeight:'55px',overflow:'hidden'}}>
            
            <div className='inprogress'>
                <div className='picboxIn'>
                    <img src={props.picture} className='picAuthorIn'/>
                </div>
                <div className='doneDiv' onClick={()=>review(props,props.userID,setMainState,openModal,Review)} style={{color:'white',fontSize:'0.8em',textAlign:'center',position:'absolute',right:'0',backgroundColor:'red',width:'50px',height:'100%'}}>Done</div>
                <span className='cursor' onClick={()=>viewTask(props.taskID)} style={{width:'210px',overflow:'hidden',position:'absolute',left:'60px',height:'55px',fontSize:'0.9em'}}>{props.topic}</span>
            </div>
        </div>

    
}

const makeInList = (viewTask,setMainState,openModal,props) => {
    let result = [];
    if(props && props.length==0) result.push(<div  style={{position:'relative',textAlign:'left',height:'50px',lineHeight:'50px',overflow:'hidden'}}></div>)
    for (let i in props){
        if(i==props.length-1)result.push(progressList(viewTask,setMainState,openModal,props[i]))
        else result.push(progressList(viewTask,setMainState,openModal,props[i]))
    }
    return <div style={{position: 'absolute',width:'100%', left:0, top:'61px', height: 'auto', backgroundColor:'white', borderBottomLeftRadius:'7px',borderBottomRightRadius:'7px', textAlign:'center', verticalAlign:'middle', fontSize:'1.1em', overflow:'hidden'}}>
        {result}
    </div>
}

const InProgress = ({viewTask,setMainState,openModal,...props}) => (
    <div>
    {!props.inprogress ? null :props.inprogress.length==0 ? null:
    <div style={{position: 'relative',top:'300px'}}>
        <div style={{fontWeight:'blod',position: 'absolute',width:'100%', left:0, top:'0', height: '60px', backgroundColor:'white', borderTopLeftRadius:'7px',borderTopRightRadius:'7px', textAlign:'center', verticalAlign:'middle', lineHeight: '60px', fontSize:'1.1em', borderBottom:'1px solid rgba(0,0,0,0.2)'}}>
           In Progress 
        </div>
        {/* <div style={{position: 'absolute',width:'100%', left:0, top:'61px', height: '75px', backgroundColor:'white', borderBottomLeftRadius:'7px',borderBottomRightRadius:'7px', textAlign:'center', verticalAlign:'middle', lineHeight: '75px', fontSize:'1.1em'}}>
           {props.firstname+' '+props.lastname}
        </div> */}
        {makeInList(viewTask,setMainState,openModal,props.inprogress)}
    </div>
    }</div>
)

export default InProgress;