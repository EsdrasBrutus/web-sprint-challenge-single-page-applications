import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

const Form = (props) =>{

    const {
        values,
        submit,
        change,
        errors,
      } = props

      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

      const onChange = evt => {
    
        const { name, value, checked, type } = evt.target
  
        const val = type ==='checkbox' ? checked : value

        change(name, val)
     }


    return(
        <div>
            <form className='form container' onSubmit={onSubmit}>
            <h2>Customize your Pizza</h2>
                <div className='errors'>
                    {/* <div>{errors.name}</div> */}
                </div>
                <div>
                    <h3>Name</h3>
                </div>

                {/* {Name} */}
                <label>
                    <input  
                        value={values.name}
                        onChange={onChange} 
                        name='name' 
                        type='text' />
                </label>
                {/* {Size Dropdown} */}
                <div>
                    <h3>Select Size</h3>
                </div>
                <label>
                    <select name='size' onChange={onChange} value={values.size}>
                            <option>Select Size</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                    </select>
                </label>


                {/* {Toppings Checkboxes} */}
                <div>
                    <h3>Select Toppings</h3>
                </div>
                <label>Pepperoni
                    <input 
                        type='checkbox'
                        name='pepperoni'
                        onChange={onChange}
                        checked={values.pepperoni}
                    />
                </label>

                <label>Onions
                    <input 
                        type='checkbox'
                        name='onions'
                        onChange={onChange}
                        checked={values.onions}
                    />
                </label>

                <label>Sausage
                    <input 
                        type='checkbox'
                        name='sausage'
                        onChange={onChange}
                        checked={values.sausage}
                    />
                </label>

                <label>Mushrooms
                    <input 
                        type='checkbox'
                        name='mushrooms'
                        onChange={onChange}
                        checked={values.mushrooms}
                    />
                </label>

                {/* {Special Instructions} */}
                <div>
                    <h3>Special Instructions</h3>
                </div>
                <label>
                    <input  
                        value={values.specialInstr}
                        onChange={onChange} 
                        name='specialInstr' 
                        type='text' />
                </label>
                <Link to='/confirm'>
                    <button>Submit Order</button>
                </Link>
                
            </form>
        </div>
    )
}

export default Form;