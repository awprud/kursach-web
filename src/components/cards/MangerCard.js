import React from 'react';
import "./index.css";

const ManagerCard = ({manager, user}) => {
    console.log(manager)
    return (
        <div className="card-manager">
            <img src={manager.photo} alt="Manager"/>
            <div>
                <h3>{manager.name}</h3>
                <span>{manager.gender}</span>
            </div>
        </div>
    );
}

export default ManagerCard;