import axios from "axios";

import { GET_LISTS, LISTS_LOADING } from "./types";

// Get current profile
export const getLists = () => dispatch => {
    dispatch(setListsLoading());
    axios
        .get("/api/lists")
        .then(res =>
            dispatch({
                type: GET_LISTS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_LISTS,
                payload: {}
            })
        );
};

//  Lists loading
export const setListsLoading = () => {
    return {
        type: LISTS_LOADING
    };
};

