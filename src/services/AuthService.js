import Http from './HttpService';

class AuthService extends Http {
    getUser() {
        return {
            token: window.localStorage.getItem('access_token'),
            ...window.localStorage.getItem('user')
        };
    }

    login(model) {
        this.clearUser();
        return this
            .post('/user/auth', model)
            .then((data) => {
                this.storeUser(data.user, data.token);
                return data;
            });
    }

    register(model) {
        return this.post('/user', model)
            .then((registeredUser) => {
                this.storeUser(registeredUser.data);
                return registeredUser;
            });
    }

    signOut() {
        this.clearUser();
    }

    storeUser(user, token) {
        window.localStorage.setItem('user', user);
        token && window.localStorage.setItem('access_token', token);
    }

    clearUser() {
        window.localStorage.removeItem('user');
        window.localStorage.removeItem('access_token');
    }
}

export default new AuthService();
