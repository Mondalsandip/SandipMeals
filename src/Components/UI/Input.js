import React from 'react'
import style from './Input.module.css'

const Input = (props) => {
  return (
    <div className={style.input}>
        <label htmlFor={props.obj.id}>{props.label}</label>
        <input {...props.obj} />
      
    </div>
  )
}

export default Input
