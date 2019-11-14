import React from 'react'; 

import './toggleButton.styles.scss';

const ToggleButton = props => (
   <button className='toggle-button' onClick={props.click}>
       <div className='toggle-button_line' />
       <div className='toggle-button_line' />
       <div className='toggle-button_line' />
   </button>
); 

export default ToggleButton; 
