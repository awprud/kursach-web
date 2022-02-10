import axios from "axios";

const interceptorsRequest = [
    request => {
        const access_token = window.localStorage.getItem('access_token');

        if(!access_token) {
            return request;
        }

        request.headers = {
            'Access-Control-Allow-Origin': '*',
            Authorization: access_token ? `Bearer ${access_token}` : "",
        };

        return request;
    },
    err => Promise.reject(err)
];

class Http {
    constructor() {
        this.instance = Http.createInstance({
            baseURL: `${Http.api.common}/${Http.versions.v1}`,
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        });

        this.instance.interceptors.request.use(...interceptorsRequest);
    }

    static createInstance() {
        return axios.create.apply(axios, arguments);
    }

    get() {
        return this.instance.get.apply(this.instance, arguments);
    }

    patch() {
        return this.instance.patch.apply(this.instance, arguments);
    }

    put() {
        return this.instance.put.apply(this.instance, arguments);
    }

    post() {
        return this.instance.post.apply(this.instance, arguments);
    }

    delete() {
        return this.instance.delete.apply(this.instance, arguments);
    }
}

Http.api = {
    common: 'http://localhost:9999/api'
};

Http.versions = {
    v1: 'v1.2'
};

export default Http;
