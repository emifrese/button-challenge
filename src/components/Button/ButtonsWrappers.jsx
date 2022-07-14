import React from 'react'

import classes from './ButtonsWrappers.module.css'

const ButtonsWrappers = ({children}) => {
  return (
    <div className={classes.buttonsWrappers}>{children}</div>
  )
}

export default ButtonsWrappers