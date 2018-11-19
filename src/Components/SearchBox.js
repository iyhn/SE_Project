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
            
            <div className='contentsize'>
                    <div className='logobox'>
                        <img src={img} className='logo'/>
                    </div>
                <div className='jobdetailbox'>
                    <div className='headbox'>
                            <div className='jobhead'>Job :</div>
                            <div className='heads'>Wage :</div>
                            <div className='heads'>Position :</div>
                    </div>
                    <div className='detailbox'>
                        <div className='jobdetail'>Cut down tree</div>
                        <div className='detail'>100000$</div>
                        <div className='detail'>Carpenter</div>
                    </div>
                </div>
            </div>
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