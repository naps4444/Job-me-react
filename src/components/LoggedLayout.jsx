import React from 'react'
import LoggedHead from './LoggedHead'
import Footer from './Footer'

const LoggedLayout = ({children}) => {
  return (
    <div>
        <LoggedHead />
        {children}
        <Footer />
    </div>
  )
}

export default LoggedLayout