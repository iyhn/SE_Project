import React from 'react';
import './css/Profile.css';
import check from '../check.png';
import moment from 'moment'
import api from '../api/api';
import modal from './Review';
import './css/TaskModal.css';

  const review = (props,id,setMainState,modal) => {
    api.profile(id)
    .then((res)=>{
        res.json().then(body=>{
            setMainState({reviewProfile:{task:props,...body},modal:modal})      
          })
    })
 }
  const accept = (id,task,setMainState) => {
    api.accept({
        id: id,
        taskID: task
    }).then((res)=>{
        res.json().then((body)=>{
            api.profile(localStorage.id)
            .then((a)=>{
                a.json().then((body2)=>{
                    setMainState({profile:body2})
                })
            })
            setMainState({task:body,modal:null})
        })
    })
  }

const List = (setMainState,props) => {
    return <div className='contentContainer2' >
    <div className='picbox'>
        <img src={props.picture} className='picAuthor cursor'/>
    </div>
    <div className='nameLike'>
        {props.firstname + ' ' + props.lastname}
    </div>
    <img className='checkImg checkTaskModal' onClick={() => {accept(props.id,props.task,setMainState)}} src={check} ></img>
</div>
}

const makeList = (setMainState,props) => {
    let result = [];
    for (let i in props){
        result.push(List(setMainState,props[i]))
    }
    return <div>
        {result}
    </div>
}

const makeListProgress = (setMainState,props) => {
    return <div className='contentContainer2' >
    <div className='picbox'>
        <img src={props.picture} className='picAuthor cursor'/>
    </div>
    <div className='nameLike'>
        {props.firstname + ' ' + props.lastname}
    </div>
    <span className='checkImg doneTaskModal' onClick={() => {review(props,props.id,setMainState,modal)}} >Done</span>
</div>
}

const TaskModal = ({closeModal, setMainState, ...props}) => {
    console.log(closeModal);
    let state = JSON.parse(JSON.stringify(props));
    return (
        <div style={{position:'relative',display:'inline-block',left:'50%',top:'55px',transform:'translateX(-50%)'}}>
            <div className='content m' id={props.targetTask.id}>
                <div className='contentContainer' id={props.targetTask.id}>
                    <div style={{position:'relative',height:'215px'}}>
                        <div className='topic'>{props.targetTask.topic}</div>
                        <div className='description'>{props.targetTask.description}</div>
                        <div className='wage'>Wage: {props.targetTask.wage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                        <div className='position'>Position: {props.targetTask.position}</div>
                    </div>   
                    <div className='border'/>
                    <div className='author'>
                        <div style={{position:'relative', width:'100%'}}>
                            <div style={{left:'10px',position:'relative',top:'8px',marginRight:'5px',display:'inline-block',width:'25px',height:'25px',borderRadius:'50%',overflow:'hidden'}}>
                                <img src={props.targetTask.picture} className='picAuthor cursor'/>
                            </div>
                            
                            <span style={{position:'relative',left:'12px'}} className='cursor'>{props.targetTask.firstname+' '+props.targetTask.lastname}</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='content m2'>
                {/* <div className='contentContainer2' >
                    <div className='picbox'>
                        <img src={star} className='picAuthor cursor'/>
                    </div>
                    <div className='nameLike'>
                        Wachit Chaisitsak
                    </div>
                </div>
                <div className='contentContainer2' >
                    <div className='picbox'>
                        <img src={star} className='picAuthor cursor'/>
                    </div>
                    <div className='nameLike'>
                        Wachit Chaisitsak
                    </div>
                </div> */}
                {console.log(props)}
                {props.targetTask.state ? makeListProgress(setMainState,props.targetTask.acceptedInfo[0]):makeList(setMainState,props.targetTask.likeInfo)}
            </div >
            
        </div>
    )
}

export default TaskModal;