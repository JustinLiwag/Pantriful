import {
    GET_LISTS, LISTS_LOADING
} from "../actions/types";

const initialState = {
    lists: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LISTS_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_LISTS:
            return {
                ...state,
                lists: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
