import React from 'react'
import CompB from './CompB'
const CompA = () => {
    let eid=101;
    let ename='om'
  return (
    <div>
      <CompB  id={eid} name={ename}/>
    </div>
  )
}

export default CompA
