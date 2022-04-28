import React from 'react'
import CompB from './CompB'
const CompA = () => {
    let ename='om'
    let id=101;
  return (
    <div>
      <CompB name={ename} empid={id}/><h1>component A</h1>
    </div>
  )
}

export default CompA
