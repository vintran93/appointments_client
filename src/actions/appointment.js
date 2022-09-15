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