import Http from "./HttpService";

class FeedbackService extends Http {
    BASE_URL = "/feedback";

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

export default new FeedbackService();
