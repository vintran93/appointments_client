import {
  APPOINTMENTS_SUCCESS,
  APPOINTMENTS_FAIL,
  SET_MESSAGE,
} from './permit';

import doctorActions from './doctorActions';

const loading = () => {
  return {
    type: loading

  }
}

const appointments = () => dispatch => doctorActions.fetchAppointments()
  // reutns plain JS object that must have type key
  // action creater
  // does not return JS object but a function that takes dispatch as argument Redux Thunk 
  // delay dispatching of action b/c waiting for timeout or something else
  .then(response => {
    dispatch({
      type: APPOINTMENTS_SUCCESS,
      payload: { appointments: response.data },
    });

    dispatch({
      type: SET_MESSAGE,
      payload: response.data.message,
    });

    return Promise.resolve();
  },
    error => {
      const message = (error.response)
      dispatch({
        type: APPOINTMENTS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }

  );

export default appointments;