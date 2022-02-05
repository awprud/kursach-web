import axios from "axios";

const interceptorsRequest = [
    request => {
        const {accessToken} = window.localStorage.getItem('access_token');
        request.headers = {
            Authorization: accessToken ? `Bearer ${accessToken}` : "",
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
        this.instance.interceptors.response.use(...interceptorsResponse);
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
    common: 'https://25f9-37-73-40-178.ngrok.io/api'
};

Http.versions = {
    v1: 'v1'
};

export default Http;
