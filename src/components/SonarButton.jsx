import React, { useState } from 'react';
import '../styling/SonarButton.css';

const SonarButton = (props) => {

  const small = {
    width: '5rem',
  };
  const medium = {
    width: '8rem',
  };
  const large = {
    width: '10rem',
  };
  

  return (
    <button className="buttonStyling" style={props.size && props.size == 'small' ? small : props.size == "medium" ? medium : large}>
        {props.buttonText}
      </button>
  );
}
export default SonarButton;