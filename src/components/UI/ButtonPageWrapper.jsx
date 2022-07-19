import React from 'react'

import classes from './ButtonPageWrapper.module.css'

const ButtonPageWrapper = ({children}) => {
  return (
    <div className={classes.container}>{children}</div>
  )
}

export default ButtonPageWrapper