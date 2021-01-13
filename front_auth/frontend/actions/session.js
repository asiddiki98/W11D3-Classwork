import { postUser, postSession, deleteSession } from '../utils/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});
export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

// thunk action creators

export const createNewUser = formUser => (dispatch) => {
    debugger
    return postUser(formUser).then((user) => {
        debugger
        dispatch(receiveCurrentUser(user))})};

export const loginUser = formUser => dispatch => postSession(formUser)
.then(user => dispatch(receiveCurrentUser(user)));

export const logoutUser = () => dispatch => deleteSession()
.then(()=> dispatch(logoutCurrentUser()));