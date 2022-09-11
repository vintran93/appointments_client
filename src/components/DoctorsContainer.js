import React, { Component } from 'react'
import Doctors from './Doctors';
import DoctorForm from './DoctorForm';
import { connect } from 'react-redux';
import { fetchDoctors } from '../actions/doctorActions';

class DoctorsContainer extends Component {

    componentDidMount() {
        this.props.fetchDoctors()
    }

    render() {
        return (
            <div className="container text-center">
                <h3>Doctors List</h3>
                <p className="text-secondary">Please select a doctor for more details.</p>
                <Doctors />
                <hr />
                <DoctorForm />
                <br />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDoctors: () => dispatch(fetchDoctors())
    }
}

export default connect(null, mapDispatchToProps)(DoctorsContainer);