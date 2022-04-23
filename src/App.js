
import React from 'react'
import Binding from './handbindlifecycle/Binding'
import Complifecycle from './handbindlifecycle/Complifecycle'
import Handling from './handbindlifecycle/Handling'
import Navbar from './Navbar/Navabr'


const App = () => {
  return (
    <div><Navbar/><Handling/><Binding/><Complifecycle/>
    </div>
  )
}

export default App