import Http from "./HttpService";

class AuthorsService extends Http {
    BASE_URL = "/author";

    getList() {
        return this.get(`${this.BASE_URL}/all`);
    }

    create(dto) {
        return this.post(this.BASE_URL, dto);
    }

    edit(localId, dto) {
        return this.put(`${this.BASE_URL}/${localId}`, dto);
    }
}

export default new AuthorsService();
