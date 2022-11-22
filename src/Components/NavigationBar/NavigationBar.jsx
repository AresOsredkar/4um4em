import React from 'react'

function NavigationBar(theme, props) {
  return (
    <nav class={theme}>
        { props }
    </nav>
  )
}

export default NavigationBar
