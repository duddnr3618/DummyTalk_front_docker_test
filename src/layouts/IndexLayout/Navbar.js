import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const accessToken = localStorage.getItem('accessToken');

    const onClickLogout = () => {
        alert("로그아웃이 되었습니다");
        setClick(!click);
        window.localStorage.removeItem("accessToken");
    };

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", showButton);
        return () => window.removeEventListener("resize", showButton);
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src="/logo.svg" alt="Logo" /> 
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>

                        <li className="nav-item-mobile">
                            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                        <li className="nav-item-mobile">
                            <Link to="/login" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign In
                            </Link>
                        </li>
                    </ul>
                    {(button && !accessToken) && (
                        <Button buttonStyle="btn--outline" link="/sign-up-form">
                            SIGN UP
                        </Button>
                    )}
                    {(button && !accessToken) && (
                        <Button buttonStyle="btn--outline" link="/sign-up">
                            SIGN IN
                        </Button>
                    )}
                    {accessToken && (
                        <Button buttonStyle="btn--outline" link="/" onClick={onClickLogout}>
                            LOGOUT
                        </Button>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;