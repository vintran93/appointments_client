import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../actions/auth';
import logo from '../assets/logo.png';
import classes from '../styles/Sidebar.module.css';

const Sidebar = () => {
    const { user: currentUser } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logout());
    };

    const toggleMenu = () => {
        const navMenu = document.querySelector('nav');
        navMenu.classList.toggle(classes.toggle);
    };

    return (
        <div>
            <button type="button" className={classes.hamburger} onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} size="2x" />
            </button>
            <nav className={`${classes.sidenav} ${classes.toggle}`}>
                <NavLink to="/">
                    <img src={logo} alt="logo" className={classes.logo} />
                </NavLink>
                {currentUser
                    && (
                        <NavLink to="/profile" className={classes.navlink} activeClassName={classes.active}>
                            Profile
                        </NavLink>
                    )}
                {currentUser ? (
                    <ul>
                        <li>
                            <NavLink to="/doctors" className={classes.navlink} activeClassName={classes.active}>
                                Doctors
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/appointments" className={classes.navlink} activeClassName={classes.active}>
                                Appointments
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/appointments/new" className={classes.navlink} activeClassName={classes.active}>
                                Schedule Appointment
                            </NavLink>
                        </li>
                        <li>
                            <a href="/login" onClick={logOut} className={classes.navlink}>
                                Logout
                            </a>
                        </li>
                    </ul>
                ) : (
                    <ul>
                        <li>
                            <NavLink to="/login" className={classes.navlink} activeClassName={classes.active}>
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className={classes.navlink} activeClassName={classes.active}>
                                Sign Up
                            </NavLink>
                        </li>
                    </ul>
                )}

                <footer>
                    <br></br><br></br>
                    <p> Medical Health Service Center &copy;2022</p>
                </footer>
            </nav>
        </div>
    );
};

export default Sidebar;