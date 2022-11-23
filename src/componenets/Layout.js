import React from 'react'
import Navbar from './Navbar'
import "../styles/global.css"

export default function Layout({children}) {
  return (
      <div className="contnet"> 
          <Navbar />
          <div className="contnet"> 
              {children}
          </div>    
          <footer>
              <br/>
              Copyright 2022 Webwarrior
          </footer>
    </div>
  )
}
