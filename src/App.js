import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import Form from './components/Form'
import formSchema from './validation/formSchema'
import Confirm from './components/Confirm'

import * as yup from 'yup'

const App = () => {

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
      setOrder(newOrder)
  }


  const [order, setOrder] = useState({})
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors)

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
          />
        </Route>

        <Route path='/confirm'>
          <Confirm order={order}/>
        </Route>
      </div>
    </div>
  );
};
export default App;
