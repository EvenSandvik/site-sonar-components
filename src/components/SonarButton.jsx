import React, { useState } from 'react';
import '../styling/SonarButton.css';

const SonarButton = (props) => {
  /**
   * Styling constants
   */
  const small = {
    width: '5rem',
  };
  const medium = {
    width: '8rem',
  };
  const large = {
    width: '10rem',
  };
  const blue = {
    backgroundColor: '#6BA7EE',
    color: 'white'
  };
  const white = {
    backgroundColor: '#FFFFFF',
    color: 'black',
  };
  
  //TODO: onClick prop parameter
  return (
    <button className="buttonStyling" style={Object.assign(size(), color())}>
      {props.buttonText}
    </button>
  );
  
   /**
   * Styling functions
   */
  function size() {
    return props.size && props.size == 'small' ? small : props.size == "medium" ? medium : large;
  }

  function color() {
    switch(props.color) {
      case 'blue':
        return blue;
      case 'white':
        return white
    }
  }
}
export default SonarButton;
