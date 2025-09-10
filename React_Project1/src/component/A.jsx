import React from 'react'
import B from './B'

const A = () => {
  const msg="A String is Here!"
  return (
    <div>
      <B msg={msg}/>
    </div>
  )
}

export default A
