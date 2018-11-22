import React from 'react';
import api from '../api/api';
import Task from './Task';
import './css/Profile.css';
import dot from '../dot.png';
import heart from '../heart2.png';
import './css/SearchBox.css';
import './css/ProfileBox.css';

const post = (setMainState) => {
    api.postTask({
        userID: localStorage.getItem('id'),
        topic: document.getElementById('topic').value,
        wage: document.getElementById('wage').value,
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


const content = (props) => {

    return <div className='content' id={props.id}>
        <img src={dot} className='dot'/>
        <div className='contentContainer' id={props.id}>
            <div style={{position:'relative',height:'215px'}}>
                <div className='topic'>{props.topic}</div>
                <div className='description'>{props.description}</div>
                <div className='wage'>Wage: {props.wage}</div>
                <div className='position'>Position: {props.position}</div>
            </div>   
            
            {/* <table style={{tableLayout: 'fixed', width:'100%'}}>
                <tbody>
                    <tr>
                        <td>
                            <img src={img} style={{width:'100%', borderRadius:'50%'}}/>
                        </td>
                        <td colSpan="4" style={{paddingLeft:'20px'}}>
                        {poster} <br/>
                        หน้าที่<br/>
                        รายได้ <br/>
                        หมายเหตุ
                        </td>
                    </tr>
                </tbody>
            </table> */}
            <div className='border'/>
            <div className='author'>
                <div style={{position:'relative', width:'100%'}}>
                    <div style={{position:'relative',top:'5px',marginRight:'5px',display:'inline-block',width:'25px',height:'25px',borderRadius:'50%',overflow:'hidden'}}>
                        <img src={props.picture} className='picAuthor'/>
                    </div>
                    
                    <span>{props.firstname+' '+props.lastname}</span>
                    
                    <div className='heartDiv' onClick={()=>document.getElementById('likeList'+props.taskID).style.display='block'}><img src={heart} className='heart icon'/>0</div>
                    <div className='likeList' id={'likeList'+props.taskID}><div className='innerLikeList'></div></div>
                </div>
                
            </div>
        </div>
    </div>
}

const makeContent = (props) => {
    console.log('props')
    let result=[];
    for(let r in props){
        result.push(content(props[r]));
    }
    return <div>{result}</div>;
}

const SearchBox = ({profilePic, setMainState, openModal, ...props}) => (
    <div>
            <div id='search' className='search'>
                <div style={{position:'relative', height:'75px'}}>
                    <div style={{position:'absolute', top:'50%', transform:'translateY(-50%)', width:'50px', height:'50px', borderRadius:'50%', display:'inline-block', overflow:'hidden'}}>
                        <img src={profilePic} style={{height:'100%'}}/>
                    </div>
                    <div style={{position:'absolute',left:'90px' , width:'425px',height:'75px'}}>
                        <input name='postInput' id='topic' onFocus={()=>document.getElementById('search').style.height='350px'} style={{width:'100%', height:'100%',  fontSize:'1.2em', border:'none'}} placeholder='Post something . . . '></input>
                    </div>
                </div>
                <div style={{position:'relative',marginTop:'20px', height:'175px',outline:'none'}}>
                    
                    <div className="divPostInput">
                        <input name='postInput'  id="wage" type="text" placeholder="&nbsp;" />
                        <span className="placeholder">Wage</span>
                        <span className="border"></span>
                    </div>
                    <div className="divPostInput Right">
                        <input name='postInput'  id="position" type="text" placeholder="&nbsp;" />
                        <span className="placeholder">Position</span>
                        <span className="border"></span>
                    </div>

                    <textarea name='postInput' id="description"  placeholder='Description' style={{padding:'10px',width:'495px', height:'100px', marginTop:'10px', resize:'none', borderRadius:'7px'}}></textarea>
                    {/* <input style={{position:'absolute',width:'250px',height:'30px'}}></input>
                    <input style={{position:'absolute',width:'250px',right:'0',height:'30px'}}></input> */}
                    <button onClick={()=>post(setMainState)} style={{borderRadius:'7px',position:'absolute',width:'75px',top:'220px',right:'0',height:'30px'}}>Post</button>
                </div>
            </div>
        {/* {content(interLogo, 'Inter Restaurant')}
        {content(exe, 'Apisith Vongso')}
        {content(jen, 'Thitiphan Semangern')} */}
        {makeContent(props)}
    </div>
)

export default SearchBox;