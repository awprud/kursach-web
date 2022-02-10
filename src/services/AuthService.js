import Http from './HttpService';
import {roleGuest} from "../constants";

class AuthService extends Http {
    getUser() {
        const user = window.localStorage.getItem('user');

        return {
            token: window.localStorage.getItem('access_token'),
            ...JSON.parse(user || `{"role": "${roleGuest}"}`)
        };
    }

    login(model) {
        this.clearUser();
        return this
            .post('/user/auth', model)
            .then(({data}) => {
                this.storeUser(data.user, data.token);
                return data;
            });
    }

    register(model) {
        return this.post('/user', model)
            .then((registeredUser) => {
                return registeredUser;
            });
    }

    signOut() {
        this.clearUser();
    }

    storeUser(user, token) {
        window.localStorage.setItem('user', JSON.stringify(user));
        token && window.localStorage.setItem('access_token', token);
    }

    clearUser() {
        window.localStorage.removeItem('user');
        window.localStorage.removeItem('access_token');
    }
}

export default new AuthService();
