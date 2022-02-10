import Http from "./HttpService";

class AnketasService extends Http {
    BASE_URL = "/anketa";

    getList() {
        return this.get(`${this.BASE_URL}/all/full`);
    }

    create(dto) {
        return this.post(this.BASE_URL, dto);
    }

    edit(localId, dto) {
        return this.put(`${this.BASE_URL}/${localId}`, dto);
    }
}

export default new AnketasService();
