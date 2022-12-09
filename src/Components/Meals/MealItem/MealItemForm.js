import React from 'react'
import style from './MealItemForm.module.css'
import Input from '../../UI/Input'
import Button from '../../UI/Button'

const MealItemForm = (props) => {
  return (
    <form className={style.form}>
      <Input label='Amount'   obj={{
        id: props.id,
        type: 'number',
        max:'5',
        min:'1',
        step:1,
        defaultValue:1




      }}     />
      <Button>+ Add</Button>



    </form>
  )
}

export default MealItemForm
