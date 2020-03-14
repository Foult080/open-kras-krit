import { SET_ALERT, REMOVE_ALERT } from './types';
import uuid from 'uuid';

export const setAlert = (msg, alertType) => dispath => {
    const id = uuid.v4();
    dispath({
        type: SET_ALERT,
        payload: {msg, alertType, id}
    });

    setTimeout( () => dispath({ type: REMOVE_ALERT, payload:id }), 5000);
}
