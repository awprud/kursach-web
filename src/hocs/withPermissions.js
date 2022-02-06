import AuthService from "../services/AuthService";

const withPermissions = (WrappedComponent) => {
    const user = AuthService.getUser();
    return (...props) => WrappedComponent({user, ...props});
}

export default withPermissions;