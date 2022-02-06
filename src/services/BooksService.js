import Http from "./HttpService";

class BooksService extends Http {
    BASE_URL = "/book";
    ORDER_URL = "/order";

    getList() {
        return this.get(`${this.BASE_URL}/all`);
    }

    create(dto) {
        return this.post(this.BASE_URL, dto);
    }

    edit(dto) {
        return this.put(`${this.BASE_URL}`, dto);
    }

    makeOrder(dto) {
        return this.post(this.ORDER_URL, {status: 'New', ...dto});
    }

    getOrdersList() {
        return this.get(`${this.ORDER_URL}/all/full`);
    }
}

export default new BooksService();
