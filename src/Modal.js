import React,{ useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Context } from './context'


const Modal = () => {
  const contextModal = useContext(Context)

  return (
    <div className={contextModal.showModal ? 'modal-overlay show-modal' : 'modal-overlay '}>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button 
          className='close-modal-btn'
          onClick={contextModal.handleShowModal}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal
