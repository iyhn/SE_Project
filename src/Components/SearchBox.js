import React from 'react';
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

const SearchBox = () => (
    <div>
        {content(interLogo, 'Inter Restaurant')}
        {content(exe, 'Apisith Vongso')}
        {content(jen, 'Thitiphan Semangern')}
        <div style={{borderBottom: '2px solid',borderColor:'rgb(237,245,250)', height:'110px', padding:'20px 20px'}}>
            
        </div>
        <div style={{borderBottom: '2px solid',borderColor:'rgb(237,245,250)', height:'110px', padding:'20px 20px'}}>
            
        </div>
    </div>
)

export default SearchBox;