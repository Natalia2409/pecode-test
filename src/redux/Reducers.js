import { combineReducers } from "redux";
import { GET_CHARACTERS, GET_EPISODES, GET_LOCATIONS, GET_CURRENT_CHAR } from "./types";

const initialStore = {
    characters: [],
    episodes: [],
    locations: [],
    currentChar: []
}

export const rootReducer = combineReducers({
    characters: getCharacters,
    episodes: getCharacters,
    locations: getCharacters,
    currentChar: getCharacters
});

export function getCharacters(state = initialStore, action) {
    switch(action.type) {
        case GET_CHARACTERS:
            return {...state, characters: action.payload}
        case GET_EPISODES:
            return {...state, episodes: action.payload}
        case GET_LOCATIONS:
            return {...state, locations: action.payload}
        case GET_CURRENT_CHAR:
            return {...state, currentChar: action.payload}
        default: return state
    }
}
