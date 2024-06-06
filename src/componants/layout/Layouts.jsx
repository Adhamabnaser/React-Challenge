import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'


 function Layouts() {
  return <><main>
    <nav>
        <Navbar/>
    </nav>
        <Outlet/>
  
  </main>
  </>
}
export default React.memo(Layouts)