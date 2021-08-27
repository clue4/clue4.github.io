import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

// for the modal: 
// The MIT License (MIT)

// Copyright (c) 2020 Léo Pradel

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

function ImagePopup (props) {
  
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className='nature-container'>
      <img 
        className='nature-photo'
        src={props.source}
        key={props.key}
        onClick={onOpenModal}
        width='300px'
        alt=''
      />
      
      <Modal open={open} onClose={onCloseModal} center>
          <img src={props.source} alt='' width='100%'/>
      </Modal>
    </div>
  )
}

export default ImagePopup
