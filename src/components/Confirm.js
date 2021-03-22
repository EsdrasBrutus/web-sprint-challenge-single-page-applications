import React from 'react'
import '../App.css';

const Confirm = (props) =>{

    const { order } = props

    return(
        <div>
            <h2>Order Confirmation</h2>
            <h3>Thank you for ordering from Lambda Pizza!</h3>
            <p>Details on your order down below</p>
            <div className='order'>
                <h3>Order belonging to:{order.name}</h3>
                <h4>Size:{order.size}</h4>
                <h4>Toppings:{''}</h4>
                <h4>Special Instructions:{order.specialInstr}</h4>
            </div>
        </div>
    )
}

export default Confirm;