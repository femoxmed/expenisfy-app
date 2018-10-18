import React from 'react';
import Modal from 'react-modal'


const OptionModal =(props) =>{
   return ( <div>
    <Modal  isOpen={!!props.isSelected}
            closeTimeoutMS={400} 
            className="modal"
    >
    <div className='modal__title'>DO THIS</div>
    <div className='modal__body' >
    {props.isSelected&& <p>{props.isSelected}</p>} 
    </div>

     <button className='button' onClick={props.clearSelected}>close</button>
  </Modal>
  </div>)
  
}


export default OptionModal