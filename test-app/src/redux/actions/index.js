import {
    AUTH_USER_SUCCESS,
    CANCEL_EDIT_USER,
    EDIT_USER_SUCCESS,
    REGISTER_USER_SUCCESS,
} from './types';

export const editUserSuccess = (user) => ({
    type: EDIT_USER_SUCCESS,
    payload: user,
});

export const editUser = (user) =>
    async (dispatch) => {
        console.log('Hi from editUser action');
        dispatch(editUserSuccess(user))
};

export const cancelEditMode = () => ({
    type:    CANCEL_EDIT_USER,
});

export const registerUserSuccess = (data) => ({
   type: REGISTER_USER_SUCCESS,
   payload: data,
});

export const registerUser = (values) =>
    async (dispatch, getState) => {
        const data = '1234';
        dispatch(registerUserSuccess(data))
};

export const authUserSuccess = (data) => ({
    type: AUTH_USER_SUCCESS,
    payload: data,
});

export const authUser = (values) =>
    async (dispatch, getState) => {
        const data = '1234';
        dispatch(authUserSuccess(data))
};


