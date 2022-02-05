import React from "react";
import {Link} from "react-router-dom";
import "./index.css"

const TopNavBar = () => {
    return (
        <div className="top-navigation">
            <div className="navigation-element">
                <Link to='/'>WINES</Link>
            </div>
            <div className="navigation-element">
                <Link to='/ask'>ASK CAVIST</Link>
            </div>
        </div>
    );
}

export default TopNavBar;