import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../../App';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
    }, [loggedInUser.email])

    const handleProceed = () => {
        setSuccessMessage('Thank You for your orders')
    }
    return (
        <div>
            {
                successMessage && <h2 className='text-center mt-5' style={{ color: 'green' }}>{successMessage}</h2>
            }
            <div className="m-3">
                <h4>You have : {orders.length} orders.</h4>
                {
                    orders.length === 0 && <div className='text-center'><img src="" alt="" /></div>
                }
                {
                    orders.map(order => 
                    <ListGroup.Item key={order._id}>Product Name: {order.name}
                        <ListGroup.Item>Weight : {order.quantity}</ListGroup.Item>
                        <ListGroup>Price : {order.price}</ListGroup>
                        <ListGroup> Date : {new Date(order.checkIn).toDateString('dd/MM//yyyy')}</ListGroup>
                        <ListGroup.Item>Your Email : {order.email}</ListGroup.Item>
                    </ListGroup.Item> )
                }
                <button onClick={handleProceed} style={{ float: 'right' }} className="mt-3 btn btn-success">Checkout</button>
            </div>
        </div>
    );
};

export default Orders;