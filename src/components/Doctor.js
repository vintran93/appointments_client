import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import classes from '../styles/Doctor.module.css';
import { useAlert } from 'react-alert';
import doctorActions from '../actions/doctorActions';

function Doctor() {
    const [doctor, setDoctor] = useState('');
    const [successful, setSuccessful] = useState(false);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const alert = useAlert();

    useEffect(() => {
        doctorActions.fetchDoctor(id)
            .then(resp => resp.json())
            .then(response => {
                setLoading(false);
                setDoctor(response);
            },
                error => {
                    setLoading(false);
                    const message = (error.response
                        && error.response.data
                        && error.response.data.message)
                    setDoctor(message);
                },
            );
    }, [id]);

    const handleDelete = () => {
        setLoading(true);
        doctorActions.deleteDoctor(id)
            .then(() => {
                alert.show('Doctor Deleted', {
                    type: 'success',
                    timeout: 2000,
                });
                setLoading(false);
                setSuccessful(true);
            });
    };

    if (successful) {
        return <Navigate to="/doctors" />;
    }

    return (
        <div className="container">
            <div className="text-center">
                {loading && <span className="spinner-border spinner-border-lg" />}
            </div>
            <div className={classes.Doctor}>
                <img src={doctor.image} className={classes.doctorImg} alt='' />
                <div>
                    <h2>
                        {doctor.name}
                    </h2>
                    <p className={`${classes.badge} ${classes.badgeSecondary}`}>
                        Evaluation Fee: &nbsp; $ 50.00
                    </p>
                    <p className={classes.badge}>
                        Education: &nbsp;&nbsp;
                        {doctor.education}
                    </p>
                    <p className={`${classes.badge} ${classes.badgeSecondary}`}>
                        Specialty: &nbsp;&nbsp;
                        {doctor.specialty}
                    </p>
                    <p className={classes.badge}>
                        Experience: &nbsp;
                        {doctor.experience}
                    </p>
                    <p className={`${classes.badge} ${classes.badgeSecondary}`}>
                        Address: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {doctor.address}
                    </p>
                    <br />
                    <li>
                        <Link
                            to="/appointments/new"
                            className="btn btn-primary btn-block"
                            type="button"
                        >
                            Book An Appointment
                        </Link>
                        <button
                            className="btn btn-primary btn-block"
                            onClick={handleDelete}
                        >
                            Delete Doctor
                        </button>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default Doctor;