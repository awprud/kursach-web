import React, {useEffect, useState} from 'react';
import "./index.css";
import ManagersService from "../services/ManagersService";
import ManagerCard from "../components/cards/MangerCard";
import {roleGuest} from "../constants";
import AuthService from "../services/AuthService";

const LandingPage = () => {
    const [managers, setManagers] = useState([]);
    const [user, setUser] = useState(AuthService.getUser());

    useEffect(() => {
        ManagersService.getList()
            .then(({data}) => {
                setManagers(data);
            });
    }, []);

    useEffect(() => {
        setUser(AuthService.getUser());
    }, []);

    return (
        <>
            <div className="page-landing">
                {user.role === roleGuest && (
                    <div className="manager-list">
                        {managers.map((manager) => {
                            return (
                                <ManagerCard
                                    key={manager.id}
                                    manager={manager}
                                />
                            )
                        })}
                    </div>
                )}
            </div>
        </>
    )
}

export default LandingPage;