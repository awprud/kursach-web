import Http from "./HttpService";

class ManagersService extends Http {
    BASE_URL = "/manager";

    getList() {
        return this.get(`${this.BASE_URL}/all`);
    }

    create(dto) {
        return this.post(this.BASE_URL, dto);
    }

    edit(dto) {
        return this.put(`${this.BASE_URL}`, dto);
    }
}

export default new ManagersService();
