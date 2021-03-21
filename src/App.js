import React, { useState } from "react";
import axios from 'axios'
import { Route } from 'react-router-dom'
import Form from './components/Form'
import formSchema from './validation/formSchema'
import Confirm from './components/Confirm'

const App = () => {

  const initialFormValues = {
  
    name: '',
  
    size: '',
  
    //Topings
    pepperoni: false,
    onions: false,
    sausage: false,
    mushrooms: false,
  }

  const initialFormErrors = {
    name: '',
  }
  

  const [order, setOrder] = useState({})

  return (
    <div>
      <nav>

      </nav>
      <div>
        <h1>Lambda Eats</h1>
        <p>You can remove this code and create your own header</p>
        <Route path='/pizza'>
          <Form />
        </Route>

        <Route>
          <Confirm />
        </Route>
      </div>
    </div>
  );
};
export default App;
