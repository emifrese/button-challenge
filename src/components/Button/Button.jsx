import React from 'react'

import classes from './Button.module.css'

const Button = ({variant}) => {

    let style = {};

    switch(variant){
        case 'outline': 
            console.log(variant)
            style = {backgroundColor: '#fff', color: '#3D5AFE', border: '1px solid #3d5afe'
        }
        break;
    }

  return (
    <button className={classes.buttonDefault} style={style}>Default</button>
  )
}

export default Button