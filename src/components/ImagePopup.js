import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function ImagePopup (props) {
  
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <img 
        className='nature-photo'
        src={props.source}
        key={props.key}
        onClick={onOpenModal}
        width='300px'
        alt=''
      />
      
      <Modal open={open} onClose={onCloseModal} center>
          <img src={props.source} alt='' width='550px'/>
      </Modal>
    </div>
  )
}

export default ImagePopup
