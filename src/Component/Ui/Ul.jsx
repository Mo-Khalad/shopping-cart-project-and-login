import React from 'react'

export const Ul = ({name , content}) => {
  return (
    <ul className='col-6 col-md-3 p-3'>
    <li className='fw-bold fs-5 mb-3'>{name}</li>
    {content.map((text)=>{
        return (<>
        <li className='text p-1 py-1'>{text}</li>
        </>)
    })}
</ul>
  )
}
