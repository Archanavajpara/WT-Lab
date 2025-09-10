import React from 'react'
import C from './C'

function B(props) {
  console.log(props.msg);

  return (
    <div>
      <C msg={props.msg} />
    </div>
  )
}
export default B

