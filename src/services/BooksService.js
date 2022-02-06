import Http from "./HttpService";
import {booksAvailable} from "../mok/apiMokTemp";

class BooksService extends Http {
    BASE_URL = "/book";
    ORDER_URL = "/order";

    getList() {
        return this.get(`${this.BASE_URL}/all`);
    }

    create(dto) {
        return this.post(this.BASE_URL, dto);
    }

    edit(localId, dto) {
        return this.put(`${this.BASE_URL}/${localId}`, dto);
    }

    makeOrder(dto) {
        return this.post(this.ORDER_URL, dto);
    }

    getOrdersList() {
        // TODO
        //return this.get(`${this.ORDER_URL}/all`);
        return [
            {
                book: booksAvailable[3],
                status: 'Pending'
            },
            {
                book: booksAvailable[2],
                status: 'Done'
            },
            {
                book: booksAvailable[4],
                status: 'Done'
            },
            {
                book: booksAvailable[1],
                status: 'Pending'
            },

        ]
    }
}

export default new BooksService();
