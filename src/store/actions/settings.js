import { SET_SEARCH } from "./types";


export function setSearchAction(searchString) {
    return {
        type: SET_SEARCH,
        payload: searchString
    }

}