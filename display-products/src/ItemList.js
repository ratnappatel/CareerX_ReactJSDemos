import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/';
import {Card} from 'react-bootstrap';

function ItemList() {
    const todos=[
        "Buy a Grocery",
        "Get Aadhar Address Modified",
        "Apply for E-Bill",
        "Open New Savings Account",""
    ]
  return (
    <div>
      <Card>
       {todos.map(e=>
         { return(<Card.Title key={e}>{e}</Card.Title>)}
        )}
      </Card>
    </div>
  )
}

export default ItemList