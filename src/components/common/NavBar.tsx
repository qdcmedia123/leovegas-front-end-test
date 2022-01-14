import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <div className="logo">
                <span><Link to="/">Cinema X</Link></span>
            </div>
            <label htmlFor="btn" className="icon">
                <div className={`menu-btn ${open ? 'open' : ''}`} onClick={() => setOpen(prevState => !prevState)}>
                    <div className="menu-btn__burger"></div>
                </div>
            </label>
            <input type="checkbox" name="" id="btn" className="checkbox-mobile" />
            <ul>
                <li>
                    <label htmlFor="btn-1" className="show" id="label-btn-1">Profile
                        <i className="fa fa-angle-right rotate-trans ss-fa"></i>
                    </label>
                    <Link to="/">Profile</Link>

                    <input type="checkbox" name="" id="btn-1" className="checkbox-mobile" />
                    <ul>
                        <li>
                            <Link to="/favirotes">Favirotes</Link>
                        </li>
                        <li>
                            <Link to="/watchlatter">Watch Later</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};
export default NavBar;