import React, { useEffect, useState } from 'react';
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });

        return () => {
            window.removeEventListener("scroll");
        };
    }, []);


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
            className="nav__logo"
            src="https://yt3.ggpht.com/ytc/AAUvwnhnGuHXHbn-sQdhCiEU2QG_ydtMhyi1o5FfZN87=s900-c-k-c0x00ffffff-no-rj"
            alt="Moviesflix Logo"
            />
        </div>
    )
}

export default Nav
