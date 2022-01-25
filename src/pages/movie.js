import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchMovies } from "../redux/action";

const Movie = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    const { movies, loadingMovies } = useSelector(state => state)
    if (loadingMovies) {
        return (
            <h1>loading...</h1>
        )
    } 
    return (
            <div className="container">
                <div className="content">
                    {
                        movies.map((movie,i) => {
                            return (
                                <div className="card" key={i}>
                                    <div className="card-header">
                                        {movie.title}
                                    </div>
                                    <div className="card-body">
                                        <div className="card-data">
                                            <span>director</span>
                                            <span>{movie.director}</span>
                                        </div>
                                        <div className="card-data">
                                            <span>release date</span>
                                            <span>{movie.release_date}</span>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button className="button" onClick={()=> history.push(`/film/${i+1}`)}>See more</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    )

}

export default Movie