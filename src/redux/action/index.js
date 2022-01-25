import axios from "axios";
import { ERROR_M, FETCH_CHARACTER, FETCH_MOVIES, LOADING_M, ERROR_C, LOADING_C, FETCH_DETAILS_MOVIE, FETCH_DETAILS_CHARACTER, LOADING_DC, LOADING_DM } from "../actionType";
const Movies = 'https://swapi.dev/api/films'
const character = 'https://swapi.dev/api/people'
export const fetchMovies = () => {
    return async (dispatch) => {
        try {
            let { data } = await axios.get(Movies)
            dispatch({
                type: FETCH_MOVIES,
                payload: data.results
            })
        } catch (error) {
            dispatch({
                type: ERROR_M,
                payload: true
            })
        } finally {
            dispatch({
                type: LOADING_M,
                payload: false
            })
        }
    }
}

export const fetchDetailsMovie = (id) => {
    return async (dispatch) => {
        try {
            let { data } = await axios.get(Movies+'/'+id)
            dispatch({
                type: FETCH_DETAILS_MOVIE,
                payload: data
            })
        } catch (error) {
            console.log(error);
        } finally {
            dispatch({
                type: LOADING_DM,
                payload: false
            })
        }
    }
}

export const fetchCharacter = () => {
    return async (dispatch) => {
        try {
            let { data } = await axios.get(character)
            dispatch({
                type: FETCH_CHARACTER,
                payload: data.results
            })
        } catch (error) {
            dispatch({
                type: ERROR_C,
                payload: true
            })
        } finally {
            dispatch({
                type: LOADING_C,
                payload: false
            })
        }
    }
}

export const fetchDetailsCharachter = (id) => {
    return async (dispatch) => {
        try {
            let { data } = await axios.get(character + '/' + id)
            dispatch({
                type: FETCH_DETAILS_CHARACTER,
                payload: data
            })
        } catch (error) {
            console.log(error);
        } finally {
            dispatch({
                type: LOADING_DC,
                payload: false
            })
        }
    }
}


