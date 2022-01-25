import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacter } from "../redux/action";

const Character = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCharacter())
    }, [])

    const { character, loadingCharacter } = useSelector(state => state)
    if (loadingCharacter) {
        return (
            <h1>loading...</h1>
        )
    }
    return (
        <div className="container">
            <div className="content">
                {
                    character.map((people,i) => {
                        return (
                            <div className="card" key={i}>
                                <div className="card-header">
                                    {people.name}
                                </div>
                                <div className="card-body">
                                    <div className="card-data">
                                        <span>birt</span>
                                        <span>{people.birth_year}</span>
                                    </div>
                                    <div className="card-data">
                                        <span>eye color</span>
                                        <span>{people.eye_color}</span>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button className="button">See more</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Character