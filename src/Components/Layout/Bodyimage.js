import React from 'react'
import style from './Bodyimage.module.css'
import image from '../../Assets/platter.jpg'


const Bodyimage = () => {
  return (
    <div className={style['image-body']}>
        <img src={image} alt="" />
      
    </div>
  )
}

export default Bodyimage
