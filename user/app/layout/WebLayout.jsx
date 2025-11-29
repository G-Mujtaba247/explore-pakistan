import React from 'react'
import ToursNavbar from '../components/ToursNavbar'
import ToursFooter from '../components/ToursFooter'

const WebLayout = ({children}) => {
  return (
    <>
    <ToursNavbar />
    <div>
      {children}
    </div>
    <ToursFooter />
    </>
  )
}

export default WebLayout