import React from 'react'
import {Toaster} from "react-hot-toast"
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Toaster/>
      <Routes >
        <Route path="/" element={<LoginLanding/>}/>
      </Routes>
    </>
  )
}

export default App
