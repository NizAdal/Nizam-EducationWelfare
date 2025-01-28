// actions.js
export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';
export const SET_FORM_SUBMITTED = 'SET_FORM_SUBMITTED';

export const updateFormData = (data) => ({
    type: UPDATE_FORM_DATA,
    payload: data,
});

export const setFormSubmitted = (submitted) => ({
    type: SET_FORM_SUBMITTED,
    payload: submitted,
});
