import React, { useState } from 'react';
import '../styling/SonarDropdownList.css';

const SonarDropdownList = (props) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div>
        <p className="label">{props.label}</p>
            <div className="dropdownList" onClick={() => toggleMenu()}>{props.selectText}</div>
            {menuOpen && <div className="dropdownMenu">
                {props.options && props.options.map(function(element, index){
                    return <div className="dropdownMenuElement" key={index}>{element}</div>;
                })}
            </div>}
        </div>
    );
}

export default SonarDropdownList;