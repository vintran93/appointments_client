import { combineReducers } from 'redux';
import auth from './authReducer';
import message from './messageReducer';
import { appointmentsReducer } from './appointmentReducer';
import { doctorsReducer } from './doctorsReducer';

export const rootReducer = combineReducers({
    doctors: doctorsReducer,
    appointments: appointmentsReducer,
    auth,
    message
});
