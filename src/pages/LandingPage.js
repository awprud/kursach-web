import React, {useEffect, useState} from 'react';
import "./index.css";
import ManagersService from "../services/ManagersService";
import ManagerCard from "../components/cards/MangerCard";
import {roleGuest, roleUser} from "../constants";
import AuthService from "../services/AuthService";
import AnketasService from "../services/AnketasService";
import AnketaCard from "../components/cards/AnketaCard";

const LandingPage = () => {
    const [managers, setManagers] = useState([]);
    const [anketas, setAnketas] = useState([]);
    const [user, setUser] = useState(AuthService.getUser());

    useEffect(() => {
        if (user.role !== roleGuest) {
            return;
        }

        ManagersService.getList()
            .then(({data}) => {
                setManagers(data);
            });
    }, []);

    useEffect(() => {
        if (user.role !== roleUser) {
            return;
        }

        AnketasService.getList()
            .then(({data}) => {
                console.log(data)
                setAnketas(data);
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
                                    key={`manager-${manager.id}`}
                                    manager={manager}
                                />
                            )
                        })}
                    </div>
                )}
                {user.role === roleUser && (
                    <div className="anketa-list">
                        {anketas.map((anketa) => {
                            return (
                                <AnketaCard
                                    key={`anketa-${anketa.id}`}
                                    anketa={anketa}
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