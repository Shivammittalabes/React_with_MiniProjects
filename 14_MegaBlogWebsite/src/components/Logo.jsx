import React from 'react'

function Logo({width='100px'}) {
  return (
    <div className='text-white'>
      <img src="/SB1.png" alt="logo" width={width} />
    </div>
  )
}

export default Logo