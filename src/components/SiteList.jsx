import React, { useState } from 'react';
import '../styling/SiteList.css';
import SonarButton from './SonarButton';
import support from './supported.png';

const SiteList = (props) => {
    const [page, setPage] = useState(0);

return (
    <div>
        <div style={{display: 'flex', borderBottom: "1px solid #9B9B9B", position: 'relative', height: '2.1rem'}}>
            <div onClick={() => setPage(0)} className={page == 0 ? "listMenuSelected" : "listMenu"}>All</div>
            <div onClick={() => setPage(1)} className={page == 1 ? "listMenuSelected" : "listMenu"}>Supported</div>
            <div onClick={() => setPage(2)} className={page == 2 ? "listMenuSelected" : "listMenu"}>Not Supported</div>
            <div onClick={() => setPage(3)} className={page == 3 ? "listMenuSelected" : "listMenu"}>N/A</div>
            <div style={{position: 'absolute', right: '0', bottom: '0.25rem'}}><SonarButton buttonText="Export Results" color="blue" size="medium"></SonarButton></div>
            
        </div>
        <div style={{color:"#5A5A5A",  padding: '1rem 0'}}>
            Sites with Support for X, Y and Z
        </div>
        <div>
            <div style={{display:'flex', color: '#757575'}}>
                <div style={{width: '2rem'}}></div>
                <div  style={{width: '24%'}}><b>Site Name</b></div>
                <div  style={{width: '67%'}}>Placeholder</div>
            </div>
            {page == 0 && <div>
            {props.list.map(function(element, index){
                        return <div style={{padding: '1rem 0', display: 'flex'}} key={ index }>
                        <div style={{width: '2rem', textAlign: 'center'}}><img src={support} style={{width: '1.25rem'}}></img></div>
                        <div  style={{width: '24%'}}>{element}</div>
                        <div  style={{width: '67%'}}>Placeholder for filter loop</div>
                        </div>;
                })} 
                <div>{props.list.length} results</div>
                </div>}
        </div>
    </div>
);
}
export default SiteList;




