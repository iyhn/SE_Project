import React from 'react';
import api from '../api/api';
import Task from './Task';
import './css/Profile.css';
import dot from '../cross.png';
import heart from '../heart2.png';
import check from '../check.png';
import heartred from '../heartred.png'
import './css/SearchBox.css';
import './css/ProfileBox.css';

const deleteTask = (id,setMainState) => {
    api.delete({
        taskID: id
    }).then((res) =>{
        res.json().then((body)=>{
            setMainState({task:body})
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
            setMainState({task:body})
        })
    })
}

const unlike = (e,setMainState) => {
    api.unlike({
        id:localStorage.id,
        taskID:e.target.id
    }).then((res)=>{
        res.json().then((body)=>{
            setMainState({task:body})
        })
    })
}

const like = (e,setMainState) => {
    api.like({
        id:localStorage.id,
        taskID:e.target.id
    }).then((res)=>{
        res.json().then((body)=>{
            setMainState({task:body})
        })
    })
}

const post = (setMainState) => {
    api.postTask({
        userID: localStorage.getItem('id'),
        topic: document.getElementById('topic').value,
        wage: document.getElementById('wage').value + ' ' + document.getElementById('wageOption').value,
        position: document.getElementById('position').value,
        description: document.getElementById('description').value
    }).then((res)=>{
            res.json().then((body)=>{
                setMainState({task:body})
                reset();
            })
        
    })
}

const reset = () =>{
    let list = document.getElementsByName('postInput');
    for(let i=0;i<list.length;i++){
        list[i].value=null;
    }
}

const listLike = (viewProfile,setMainState,props,createdID) => {
    return <tr>
                    <td style={{verticalAlign:'middle'}}>
                        <div style={{width:'25px',height:'25px',overflow:'hidden',borderRadius:'50%', marginRight:'5px'}}><img className='cursor' onClick={()=>viewProfile(props.id)}  style={{position:'relative',left:'50%',transform:'translateX(-50%)',height:'25px'}} src={props.picture}></img></div>
                    </td>
                    <td >
                        <span className='cursor' onClick={()=>viewProfile(props.id)}>{props.firstname + ' ' + props.lastname}</span>
                    </td>

                    {localStorage.id == createdID ?
                    <td>
                        <img className='checkImg' onClick={() => accept(props.id,props.task,setMainState)} src={check} style={{width:'10px',marginLeft:'10px'}}></img>
                    </td> : null}
                </tr>
}

const makeLikeList = (viewProfile,setMainState,props,createdID) => {
    let result = [];
    for (let i in props){
        result.push(listLike(viewProfile,setMainState,props[i],createdID))
    }
    return <div>
        <table style={{borderSpacing:'0 10px',tableLayout:'fixed',whiteSpace:'nowrap',lineHeight:'normal'}}>
            <tbody>
                {result}
            </tbody>
        </table>
        
    </div>
}

const content = (viewTask,viewProfile,setMainState,props) => {

    return <div className='content' id={props.id}>
        {localStorage.id==props.createdUserID ? <img onClick={()=>deleteTask(props.taskID,setMainState)} src={dot} className='dot cursor'/> : null}
        <div className='contentContainer' id={props.id}>
            <div style={{position:'relative',height:'215px'}}>
                <div onClick={()=>viewTask(props.taskID)} className='topic cursor'>{props.topic}</div>
                <div className='description'>{props.description}</div>
                <div className='wage'>Wage: {props.wage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                <div className='position'>Position: {props.position}</div>
            </div>   
            <div className='border'/>
            <div className='author'>
                <div style={{position:'relative', width:'100%'}}>
                    <div style={{left:'10px',position:'relative',top:'8px',marginRight:'5px',display:'inline-block',width:'25px',height:'25px',borderRadius:'50%',overflow:'hidden'}}>
                        <img onClick={()=>viewProfile(props.id)} src={props.picture} className='picAuthor cursor'/>
                    </div>
                    
                    <span style={{position:'relative',left:'12px'}} className='cursor' onClick={()=>viewProfile(props.id)}>{props.firstname+' '+props.lastname}</span>
                    {props.like ? <div className='heartDiv' ><img onClick={(e)=>{if(!props.like.includes(Number(localStorage.id)))like(e,setMainState);else unlike(e,setMainState)}} id={props.taskID} src={props.like.includes(Number(localStorage.id))? heartred:heart} className='heart icon'/><span className='numLike' onClick={()=>{if(document.getElementById('likeList'+props.taskID).style.display !=='block')document.getElementById('likeList'+props.taskID).style.display='block';else document.getElementById('likeList'+props.taskID).style.display='none'}}>{props.like.length}</span></div> : null}
                    <div className='likeList' id={'likeList'+props.taskID}><div className='innerLikeList'>{makeLikeList(viewProfile,setMainState,props.likeInfo,props.createdUserID)}</div></div>
                </div>
                
            </div>
        </div>
    </div>
}



const makeContent = (viewTask,viewProfile,setMainState,props) => {
    let result=[];
    for(let r in props){
        if(!props[r].state)result.push(content(viewTask,viewProfile,setMainState,props[r]));
    }
    return <div>{result}</div>;
}

const SearchBox = ({viewTask,viewProfile,profilePic, setMainState, openModal, ...props}) => (
    <div>
            <div id='search' className='search'>
                <div style={{position:'relative', height:'75px'}}>
                    <div style={{position:'absolute', top:'50%', transform:'translateY(-50%)', width:'50px', height:'50px', borderRadius:'50%', display:'inline-block', overflow:'hidden'}}>
                        <img src={profilePic} style={{position:'relative',left:'50%',transform:'translateX(-50%)',height:'100%'}}/>
                    </div>
                    <div style={{position:'absolute',left:'90px' , width:'425px',height:'75px'}}>
                        <input name='postInput' id='topic' onFocus={()=>document.getElementById('search').style.height='350px'} style={{width:'100%', height:'100%',  fontSize:'1.2em', border:'none'}} placeholder='Post something . . . '></input>
                    </div>
                </div>
                <div style={{position:'relative',marginTop:'20px', height:'175px',outline:'none'}}>
                    
                    <div className="divPostInput">
                        <input type='number' name='postInput'  id="wage" placeholder="&nbsp;" />
                        <span className="placeholder">Wage</span>
                        <span className="border"></span>
                    </div>
                    <div className="divPostInput Right">
                        <input name='postInput'  id="position" type="text" placeholder="&nbsp;" />
                        <span className="placeholder">Position</span>
                        <span className="border"></span>
                    </div>
                    <select id='wageOption' name='postInput' className='wageOption'>
                            <option selected="selected" value='บาท/วัน'>บาท/วัน</option>
                            <option value='บาท/เดือน'>บาท/เดือน</option>
                    </select>
                    <textarea name='postInput' id="description"  placeholder='Description' style={{padding:'10px',width:'495px', height:'100px', marginTop:'10px', resize:'none', borderRadius:'7px'}}></textarea>
                    {/* <input style={{position:'absolute',width:'250px',height:'30px'}}></input>
                    <input style={{position:'absolute',width:'250px',right:'0',height:'30px'}}></input> */}
                    <button onClick={()=>post(setMainState)} style={{borderRadius:'7px',position:'absolute',width:'75px',top:'220px',right:'0',height:'30px'}}>Post</button>
                </div>
            </div>
        {/* {content(interLogo, 'Inter Restaurant')}
        {content(exe, 'Apisith Vongso')}
        {content(jen, 'Thitiphan Semangern')} */}
        {makeContent(viewTask,viewProfile,setMainState,props)}
    </div>
)

export default SearchBox;