import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/Home.module.css';

const Home = () => (
    <div className={classes.Home}>
        <div className={classes.Overlay}>
            <div className="d-flex justify-content-center flex-column align-items-center h-75">
                <h2> BOOK AN APPOINTMENT TODAY! </h2>
                <div className="d-flex mt-3">
                    <select className={`${classes.Select} ${classes.Button} mr-4`}>
                        <option> Austin, Texas</option>
                        <option> Round Rock, Texas</option>
                        <option> Pflugerville, Texas</option>
                    </select>
                    <Link to="/appointments/new" className={classes.Button}>
                        Book Appointment
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default Home;

