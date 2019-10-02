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







// TRYING TO IMPLEMENT A RESUABLE TOGGLE BUTTON
// class ToggleButton extends React.Component {
//     state = {
//         on: false,
//     }

//     toggle = () => {
//         this.setState({
//             on: !this.state.on
//         })
//     }

//     render () {
//         return (
//             <div>
//                 {
//                     this.state.on && (
//                         <button className='toggle-button' onClick={this.toggle}>
//                             <div className='toggle-button_line' />
//                             <div className='toggle-button_line' />
//                             <div className='toggle-button_line' />
//                         </button>
//                     )
//                 }
//                 <button className='toggle-button' onClick={this.toggle}>
//                     <div className='toggle-button_line' />
//                     <div className='toggle-button_line' />
//                     <div className='toggle-button_line' />
//                 </button>
//             </div>
//         )
//     }
// }

// export default ToggleButton;