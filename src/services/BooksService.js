import Http from "./HttpService";

class BooksService extends Http {
    BASE_URL = "/book";

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

export default new BooksService();
