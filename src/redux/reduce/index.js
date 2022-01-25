import { ERROR_C, ERROR_M, FETCH_CHARACTER, FETCH_DETAILS_CHARACTER, FETCH_DETAILS_MOVIE, FETCH_MOVIES, LOADING_C, LOADING_DC, LOADING_DM, LOADING_M } from "../actionType"

const initialState = {
    movies: [],
    character: [],
    errorMovies: false,
    errorCharacter: false,
    loadingMovies: true,
    loadingCharacter: true,
    detailsMovies: {},
    loadingDetailsMovies: true,
    loadingDetailsCharacter: true,
    detailsCharacter: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {...state, movies: action.payload}
        case FETCH_DETAILS_MOVIE:
            return {...state, detailsMovies: action.payload}
        case FETCH_DETAILS_CHARACTER:
            return {...state, detailsCharacter: action.payload}
        case LOADING_M:
            return { ...state, loadingMovies: action.payload }
        case LOADING_DM:
            return { ...state, loadingDetailsMovies: action.payload }
        case LOADING_DC:
            return { ...state, loadingDetailsCharacter: action.payload }
        case ERROR_M:
            return { ...state, errorMovies: action.payload }
        case FETCH_CHARACTER:
            return { ...state, character: action.payload }
        case LOADING_C:
            return { ...state, loadingCharacter: action.payload }
        case ERROR_C:
            return { ...state, errorCharacter: action.payload}
        default:
            return state
    }
}

export default reducer