import { SET_ADAL } from './actionTypes';

const initialState = {
    adal:[],
};

const adalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADAL:
            return {
                ...state,
                adal: action.payload,
            };
        default:
            return state;
    }
};

export default adalReducer;

