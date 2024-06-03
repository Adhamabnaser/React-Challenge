import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

export default function Layouts() {
  return <><main>
    <nav>
        <Navbar/>
    </nav>
        <Outlet/>
  
  </main>
  </>
}
