import { GET_CHARACTERS, GET_EPISODES, GET_LOCATIONS, GET_CURRENT_CHAR } from "./types";

export function getCharacters() {
    return async dispatch => {
        const allCharacters = [];
        for (let i = 1; i < 35; i++) {
            const responce = await fetch(`https://rickandmortyapi.com/api/character?page=${i}`);
            const json = await responce.json();
            allCharacters.push({...json.results});
        }
        dispatch({
            type: GET_CHARACTERS,
            payload: allCharacters
        })
    }
}

export function getEpisodes() {
    return async dispatch => {
        const allEpisodes = [];
        for (let i = 1; i < 4; i++) {
            const responce = await fetch(`https://rickandmortyapi.com/api/episode?page=${i}`);
            const json = await responce.json();
            allEpisodes.push({...json.results});
        }
        dispatch({
            type: GET_EPISODES,
            payload: allEpisodes
        })
    }
}

export function getLocations() {
    return async dispatch => {
        const allLocations = [];
        for (let i = 1; i < 7; i++) {
            const responce = await fetch(`https://rickandmortyapi.com/api/location?page=${i}`);
            const json = await responce.json();
            allLocations.push({...json.results});
        }
        dispatch({
            type: GET_LOCATIONS,
            payload: allLocations
        })
    }
}

export function getChar(id) {
    return async dispatch => {
        const responce = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const json = await responce.json();
        dispatch({
            type: GET_CURRENT_CHAR,
            payload: json
        })
    }
}