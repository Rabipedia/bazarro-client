import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {spinner} from '../../icons/Group 33149.png';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import SideMenu from '../SideMenu/SideMenu';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        fetch('/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <div className="rows">
                <div className="side-nav col-md-4">
                    <SideMenu/>
                </div>
                <div className="col-md-8">
                    <h4 className='text-center m-4'>Manage Product</h4>
                    {
                        products.length === 0 && 
                        <div className='text-center'><img src={spinner} alt=""/></div>
                    }
                    {
                        products.map(product =>
                            <ManageAllProducts key={pd._id} product={product}></ManageAllProducts>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;