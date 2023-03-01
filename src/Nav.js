import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Nav.css";

function Nav() {

    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }

    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);


    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
                <img
                    onClick={() => navigate("/")}
                    className='nav_logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
                    alt="Netflix" />
                <img
                    onClick={() => navigate("/profile")}
                    className='nav_avatar'
                    src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
                    alt="avatar" />
            </div>
        </div>
    )
}

export default Nav;

