import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons'

const Headers = () => {
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to='/home'><h4><FontAwesomeIcon icon={faStore}/> Bazarro</h4></Link>
                <button className="navbar-togler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active" ><Link style={{ marginLeft: '20px', textDecoration: 'none' }}to='/home'>Home</Link></li>
                        <li className="nav-item"><Link style={{ marginLeft: '20px', textDecoration: 'none' }}to='/orders'>Orders</Link></li>
                        <li><Link to='/addProduct'>Add Product</Link></li>
                        <li className='nav-item'>
                            <Link style={{ marginLeft: '20px', textDecoration: 'none' }} to='/login'>Login</Link>
                        </li>
                    </ul>

                </div>

            </nav>
        </div>
    );
};

export default Headers;