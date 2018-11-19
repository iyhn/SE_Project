import React from 'react';
import Task from './Task';
import './css/Profile.css';
import dot from '../dot.png';
import heart from '../heart2.png';
import interLogo from '../inter.jpg';
import exe from '../exe.jpg';
import jen from '../Jen.jpg';
import './css/SearchBox.css';

const content = (img, poster) => (
    <div className='content' id={poster}>
        <img src={dot} className='dot'/>
        <div className='contentContainer' id={poster}>
            
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
                    <img src={img} className='picAuthor'/>
                    <span>{poster}</span>
                    
                    <div className='heartDiv'><img src={heart} className='heart icon'/>0</div>
                </div>
                
            </div>
        </div>
    </div>
)

const SearchBox = ({openModal, ...props}) => (
    <div>
            <div id='search' className='search' onClick={(e) => {if(e.target.name != 'postInput')document.getElementById('search').style.height='75px'}}>
                <div style={{position:'relative', height:'75px'}}>
                    <div style={{position:'absolute', top:'50%', transform:'translateY(-50%)', width:'50px', height:'50px', borderRadius:'50%', display:'inline-block', overflow:'hidden'}}>
                        <img src={props.picture} style={{height:'100%'}}/>
                    </div>
                    <div style={{position:'absolute',left:'90px' , width:'425px',height:'75px'}}>
                        <input name='postInput' id='asdasd' onFocus={()=>document.getElementById('search').style.height='250px'} style={{width:'100%', height:'100%',  fontSize:'0.9em'}} placeholder='Post something . . . '></input>
                    </div>
                </div>
                <div style={{marginTop:'20px', height:'175px'}}>
                    <textarea name='postInput' style={{width:'100%', height:'59px'}}></textarea>
                </div>
            </div>
        {content(interLogo, 'Inter Restaurant')}
        {content(exe, 'Apisith Vongso')}
        {content(jen, 'Thitiphan Semangern')}
    </div>
)

export default SearchBox;