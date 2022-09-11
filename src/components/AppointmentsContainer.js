import { Component } from 'react'
import { connect } from 'react-redux';
import { fetchAppointments } from '../actions/doctorActions';
import AppointmentsList from './AppointmentsList';

class AppointmentsContainer extends Component {

    componentDidMount() {
        // console.log(this.props.currentUser)
        this.props.fetchAppointments(this.props.currentUser.user.user.id)
    }

    render() {
        return (
            <div className="container text-center">
                <h3>Appointments</h3>
                <p className="text-secondary">Here are your scheduled dates.</p>
                <AppointmentsList />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { currentUser: state.auth }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAppointments: (id) => dispatch(fetchAppointments(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentsContainer);



