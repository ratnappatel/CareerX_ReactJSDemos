import React from 'react'

export default function CreditCard() {
  return (
    <div>
        <h1>Credit Card Details Form</h1>
        <form>
                <label>Card Number</label>
                <input type="text" name="ccNumber" />
            
            <button type="submit">Pay Now</button>
        </form>
    </div>
  )
}
