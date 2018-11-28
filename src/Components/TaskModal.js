import React from 'react';
import './css/Profile.css';
import star from '../star.png';
import moment from 'moment'
import api from '../api/api';
import './css/TaskModal.css';

const cancel = (back) => {
    
    if(!document.getElementsByName('detail')[0].disabled){
        for(var i=0;i<document.getElementsByName('detail').length;i++){
            document.getElementsByName('detail')[i].disabled = 'true';
            document.getElementById('edit').innerHTML = 'Edit';
            document.getElementById('edit').style.backgroundColor = 'black';
        }
    }else {
        back({modal: null});
    }
}

const edit = (setMainState,back) => {
    if(document.getElementsByName('detail')[0].disabled){
        for(var i=0;i<document.getElementsByName('detail').length;i++){
            document.getElementsByName('detail')[i].removeAttribute("disabled")
            document.getElementById('edit').innerHTML = 'Save';
            document.getElementById('edit').style.backgroundColor = 'green';
        }
    }else {
        api.editProfile(localStorage.getItem('id'),{
            firstname: document.getElementsByName('detail')[0].value,
            lastname: document.getElementsByName('detail')[1].value,
            dob: document.getElementsByName('detail')[2].value,
            nationality: document.getElementsByName('detail')[3].value,
            email: document.getElementsByName('detail')[4].value,
            address: document.getElementsByName('detail')[5].value
        }).then((res)=>{
            res.json().then((body)=>{
                setMainState(body)
                cancel(setMainState);
            })
        })
    }
}

const ListH = (props) => {
    return <div style={{position: 'relative'}}>
    <div className='profileboxshape'>
        <div className='profileeachbox hs'>
            <div className='profiletopic'>{props.topic}</div>
            <div className='hisDetail'>
                <span style={{marginRight:'10px'}}>position : {props.position}</span>
                <span>Wage : {props.wage}</span>
            </div>
        </div>
    </div>
    </div>
}

const List = (props) => {
    return <div className='contentContainer2' >
    <div className='picbox'>
        <img src={props.picture} className='picAuthor cursor'/>
    </div>
    <div className='nameLike'>
        {props.firstname + ' ' + props.lastname}
    </div>
</div>
}

const makeList = (props) => {
    let result = [];
    for (let i in props){
        result.push(List(props[i]))
    }
    return <div>
        {result}
    </div>
}

const TaskModal = ({closeModal, setMainState, ...props}) => {
    console.log(props);
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
                {makeList(props.targetTask.likeInfo)}
            </div >
            
        </div>
    )
}

export default TaskModal;