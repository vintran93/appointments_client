import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

function AppointmentsList({ appointments }) {
    let appointmentList
    const { user: currentUser } = useSelector(state => state.auth);

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    if (appointments.length === 0) {
        appointmentList = (
            <h4>
                You do not have any appointments yet. Schedule one
                <Link to="/appointments/new">
                    &nbsp; here.
                    {/* Non-breaking space */}
                </Link>
            </h4>
        );
    } else {
        appointmentList = appointments && appointments.map(appointment => {
            const d = new Date(appointment.appointment_date);
            const date = d.toUTCString();
            return (
                <Link to={`/appointments/${appointment.id}`} key={appointment.id}>
                    <div className="card m-4">
                        <div className="card-body">
                            <p>
                                On&nbsp;{date}
                            </p>
                        </div>
                    </div>
                </Link>
            );
        });
    }

    return (
        <div className="container text-center">
            <div className="d-flex flex-wrap">
                {appointmentList}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { appointments: state.appointments, currentUser: state.auth }
}

export default connect(mapStateToProps)(AppointmentsList);

