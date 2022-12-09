import React from 'react'
import style from './MealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = (props) => {

  return (
    <li className={style.mealitem}>
        <div className={style['mealitem-left']}>
        
        <h3>{props.name}</h3>
        <p className={style.description}>{props.description}</p>
        <p className={style.price} >{props.price}</p>
        </div>

        <MealItemForm id={props.id}  />




        
        
      
    </li>
  )
}

export default MealItem
