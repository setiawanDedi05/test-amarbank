import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailsMovie } from "../redux/action";
const DetailsMovies = () => {
    const params = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDetailsMovie(params.id))
    }, [])
    const { detailsMovies, loadingDetailsMovies } = useSelector(state => state)
    if (loadingDetailsMovies) {
        return (
            <h1>loading...</h1>
        )
    }
    if (!loadingDetailsMovies) {
        console.log(detailsMovies);
    }
    return (
        <h1>
            details Movies
        </h1>
    )
}

export default DetailsMovies