  import React from 'react'

function Modal({isVisible, onClose, children}) {


  const handleClose = (e) =>{
    if(e.target.id === 'wrapper') onClose()
  }
  
  if(!isVisible) return null;
  return (
    <div  className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='wrapper' onClick={handleClose}>
        <div className='w-[600px] flex flex-col'>
         <div className='bg-white'>
          <div className='text-right p-2 font-bold'>
          <button className='text-xl place-self-endf text-black' onClick={()=> onClose()}>X</button>
          </div>
          <div className='bg-white text-black p-2'>{children}</div>
         </div>
        </div>
    </div>
  )
}

export default Modal
