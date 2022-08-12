import React, { useState } from 'react';
import {Link} from "react-router-dom";
import logoMU from'../../images/logoMU.jpg'
import './Navbar.css';
import { navItems } from './NavItems';
import Button from './Button';
import Dropdown from './Dropdown';
function Navbar(){
    const [dropdown, setDropdown] = useState(false);
    return(
        <div>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'><img src={logoMU} alt=" "/></Link>
                 <ul className='nav-items'>
                     {navItems.map((item) => {
                        if(item.title==="Archive"){
                            return (
                                <li
                                  key={item.id}
                                  className={item.cName}
                                  onMouseEnter={() => setDropdown(true)}
                                  onMouseLeave={() => setDropdown(false)}
                                >
                                  <Link to={item.path}>{item.title}</Link>
                                  {dropdown && <Dropdown />}
                                </li>
                              );
                        }
                         return (
                            <li key={item.id} className={item.cName}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                         );
                     })}
                 </ul>
                 <Button/>
            </nav>
        </div>
    )
}

export default Navbar;