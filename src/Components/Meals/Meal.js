import React from 'react'
import style from './Meal.module.css'
import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'


const Meal = () => {
  return (
    <>
        <MealsSummary />
        <AvailableMeals/>
      
    </>
  )
}

export default Meal
