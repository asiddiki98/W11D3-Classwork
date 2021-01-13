import {postUser, deleteSession, postSession} from '../utils/session'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRRENT_USER = "LOGOUT_CURRRENT_USER"

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = user => ({
    type: LOGOUT_CURRENT_USER
});

export const createNewUser = formUser => dispatch => postUser(formUser)
.then(user => dispatch(receiveCurrentUser(user)))

export const login = formUser => dispatch => postSession(formUser)
.then(user => dispatch(receiveCurrentUser(user)))

export const logout = ()=> dispatch => deleteSession(formUser)
.then(user => dispatch(logoutCurrentUser(user)))