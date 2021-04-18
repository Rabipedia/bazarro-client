import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ManageAllProducts.css';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageAllProducts = (props) => {
    const {_id, name, price, quantity } = props.product;
    const deleteProduct = (event, _id) {
        fetch(`/delete`+id, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            if(result) {
                event.target.parentNode.style.display = 'none';
            }
        })
    }
    return (
        <div className="manage-product mb-3">
            <p>{name}</p>
            <p>{quantity}</p>
            <p>{price}</p>
            <p>
                <button className="btn btn-danger" onClick={(event) => deleteProduct(event, _id)}><FontAwesomeIcon icon={faTrashAlt}/></button>
            </p>
        </div>
    );
};

export default ManageAllProducts;