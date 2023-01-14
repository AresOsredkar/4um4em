import React from 'react'
import './NavigationBar.scss'

function NavigationBar({theme, children }) {
  return (
    <nav className={ theme }>
        { children }
    </nav>
  )
}

export default NavigationBar

