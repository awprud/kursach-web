import {useNavigate} from "react-router-dom";
import AuthService from "../services/AuthService";
import {useEffect} from "react";

const useRedirectUnauthorized = (authorizedRoles=[], to='/') => {
    const navigate = useNavigate();
    const {role} = AuthService.getUser();

    useEffect(() => {
        if (!authorizedRoles.includes(role)) {
            navigate(to);
        }
    }, []);
}

export default useRedirectUnauthorized;