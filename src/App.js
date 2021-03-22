import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import Form from './components/Form'
import formSchema from './validation/formSchema'
import Confirm from './components/Confirm'

import * as yup from 'yup'



const initialFormValues = {
  
  name: '',

  size: '',

  specialInstr: '',

  //Topings
  pepperoni: false,
  onions: false,
  sausage: false,
  mushrooms: false,
}


const initialFormErrors = {
  name: '',
}
const App = () => {

 const initialOrder= []
 const initialDisabled = true

  const [order, setOrder] = useState(initialOrder)
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  
  const postNewOrder = newOrder => {
  
    axios.post('https://reqres.in/api/users', newOrder)
      .then(res => {
        setOrder([res.data, ...order])
      })
      .catch(err => {
        console.log(err);
      })
      setFormValues(initialFormValues)
  }

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.errors[0]})
      })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      specialInstr: formValues.specialInstr.trim(),

      pepperoni: formValues.pepperoni,
      onions: formValues.onions,
      sausage: formValues.sausage,
      mushrooms: formValues.mushrooms,
    
    }
      postNewOrder(newOrder)
  }

  useEffect(() => {
    formSchema.isValid(formValues)
    .then(valid => setDisabled(!valid))
  }, [formValues])

  useEffect(()=>{
    console.log(order)
  },[order])

 

  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
      <div>
        <h1>Lambda Eats</h1>
        <Route exact path='/'>
          <Link to='/pizza'><button>Start your Order</button></Link>
        </Route>

        <Route path='/pizza'>
          <Form 

            values={formValues}
            change={inputChange}
            submit={formSubmit}
            errors={formErrors}
            disabled={disabled}
          />
        </Route>

        <Route path='/confirm'>
          <Confirm order={ order }/>
        </Route>
      </div>
    </div>
  );
};
export default App;
