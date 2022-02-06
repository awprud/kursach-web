import React, {useEffect, useState} from 'react';
import "./index.css";
import ManagersService from "../services/ManagersService";

const LandingPage = () => {
    const [managers, setManagers] = useState([]);

    useEffect(() => {
        ManagersService.getList()
            .then(({data}) => {
                setManagers(data);
            });
    }, []);

    return (
        <>
            <div className="page-landing">
                {managers.map(() => {
                    return (
                        <div/>
                    )
                })}
            </div>
        </>
    )
}

export default LandingPage;