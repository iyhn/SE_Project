import React from 'react';
import './css/Profile.css';
import api from '../api/api';
import './css/SuggestBox.css';

const submit = (setMainState,id,score,des,rid,tid) => {
    api.review({
        userID:id,
        score:score,
        description:des,
        reviewerID:rid,
        taskID:tid
    }).then(()=>{
        console.log('running')
        api.profile(localStorage.getItem('id')).then( (res) => {
            res.json().then(body=>{
              console.log('running')
              setMainState({profile:body,modal:null})
             
            })
          })
    })
}

const Review = ({closeModal, setMainState, ...props}) => {
    return (
            
            <div style={{position:'relative',left:'50%',top:'100px',transform:'translate(-50%,0)',height:'550px',width:'800px',backgroundColor:'WHITE',borderRadius:'7px'}}>
                <table style={{position:'relative',top:'20px',left:'20px'}}>{console.log(props)}
                    <tr>{console.log(props)}
                        <td rowSpan='9' style={{verticalAlign:'top'}}>
                            <div style={{height:'300px',width:'300px',overflow:'hidden', borderRadius:'7px',position:'relative',top:'35px'}}>
                                <img src={props.reviewProfile.picture} style={{width:'300px'}}/>
                            </div>
                        </td>
                        <td style={{paddingLeft:'20px'}}>
                            <div>
                                <p style={{fontWeight:'bold',fontSize:'25px',height:'20px'}}>
                                    {props.reviewProfile.firstname + ' ' + props.reviewProfile.lastname}
                                </p>
                            </div>
                            
                        </td>
                    </tr>
                    <tr>
                        <td style={{paddingLeft:'20px'}}>
                            <div style={{height:'30px',width:'70px',backgroundColor:'rgb(158, 0, 0)',display:'table-cell',borderRadius:'4px',textAlign:'center',verticalAlign:'middle'}}>
                                <p style={{display:'inline',color:'white',fontSize:'20px',fontWeight:'bold'}}>{props.reviewProfile.reviewScore}&nbsp;</p>
                                <p style={{display:'inline',color:'white',fontSize:'25px'}}>&#11089; </p>
                            </div>
                            <div style={{display:'table-cell'}}>
                                <p style={{fontWeight:'bold'}}>
                                    &nbsp;{props.reviewProfile.review.length} Reviews
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{paddingLeft:'20px'}}>
                            <p style={{fontWeight:'bold',fontSize:'15px'}}>
                                {props.reviewProfile.address}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td style={{paddingLeft:'20px'}}>
                            <p>Score</p>
                            <select id='score'>
                                <option>5</option>
                                <option>4</option>
                                <option>3</option>
                                <option>2</option>
                                <option>1</option>
                            </select>
                        </td>
                    </tr>
                    {/* <tr>
                        <td style={{paddingLeft:'20px'}}>
                            <p>Topic</p>

                        </td>
                    </tr>
                    <tr>
                        <td style={{paddingLeft:'20px'}}>
                            <input placeholder='Write your topic here' style={{padding:'10px',width:'400px',height:'30px',borderRadius:'7px',border:'solid 1px',fontSize:'15px'}}></input>
                        </td>
                    </tr> */}
                    <tr>
                        <td style={{paddingLeft:'20px'}}>
                            <p>
                                Description
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td style={{paddingLeft:'20px'}}>
                            <textarea id='des' placeholder='Write your review here' style={{padding:'10px',width:'400px', height:'100px',borderRadius:'7px',border:'solid 1px'}}></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td style={{justifyContent:'flex-end',display:'flex',marginTop:'15px'}}>
                            <button onClick={()=>submit(setMainState,props.reviewProfile.id,document.getElementById('score').value,document.getElementById('des').value,localStorage.id,props.reviewProfile.task.taskID)}>Submit</button>
                        </td>
                    </tr>
                </table>
                
                
                 
            </div>
    )
}

export default Review;