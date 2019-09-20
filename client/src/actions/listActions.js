import axios from "axios";

import { GET_LISTS, LISTS_LOADING } from "./types";

// Get all grocery lists for profile
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

// Update status of grocery list
export const updateList = (userData) => dispatch => {
    axios
        .post("/api/lists/update", userData)
        .catch(err => console.log(err));
};

//  Lists loading
export const setListsLoading = () => {
    return {
        type: LISTS_LOADING
    };
};


