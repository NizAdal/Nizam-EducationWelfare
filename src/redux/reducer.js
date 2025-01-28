import { UPDATE_FORM_DATA, SET_FORM_SUBMITTED } from './action';

const initialState = {
    formData: {
        departmentName: '',
        year: '',
        semester: '',
        subjectName: '',
    },
    formSubmitted: false,
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FORM_DATA:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload,
                },
            };
        case SET_FORM_SUBMITTED:
            return {
                ...state,
                formSubmitted: action.payload,
            };
        default:
            return state;
    }
};

export default formReducer;
