import React, { useState } from 'react';
const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <div className="logo">
                <span>Cinema X</span>
            </div>
            <label htmlFor="btn" className="icon">
                <div className={`menu-btn ${open ? 'open' : ''}`} onClick={() => setOpen(prevState => !prevState)}>
                    <div className="menu-btn__burger"></div>
                </div>
            </label>
            <input type="checkbox" name="" id="btn" />
            <ul>
                <li>
                    <label htmlFor="btn-1" className="show" id="label-btn-1">Profile
                        <i className="fa fa-angle-right rotate-trans ss-fa"></i>
                    </label>
                    <a href="!#">Profile </a>
                    <input type="checkbox" name="" id="btn-1" />
                    <ul>
                        <li>
                            <a href="!#">Favirotes</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};
export default NavBar;