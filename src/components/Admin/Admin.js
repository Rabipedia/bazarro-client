import React from 'react';
import { useContext } from 'react';
import SideMenu from '../SideMenu/SideMenu';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <div className="rows">
                <div className="side-nav col-md-4">
                    <SideMenu></SideMenu>
                </div>
                <h2 className='col-md-8 text-center mt-2'>Welcome, {loggedInUser.name}
                </h2>
            </div> 
        </div>
    );
};

export default Admin;