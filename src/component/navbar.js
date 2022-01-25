import React from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
    const history = useHistory()
    return (
        <div className="navbar">
            <h5 className="n-title">Swapiku</h5>
            <span className="n-menu" onClick={()=> history.push('/film')}>Film</span>
            <span className="n-menu" onClick={()=> history.push('/character')}>character</span>
        </div>
    )
}

export default Navbar