import React, {useEffect, useState} from 'react';
import "./index.css";
import BooksService from "../services/BooksService";
import BookOrderCard from "../components/cards/BookOrderCard";

const MyOrdersPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setOrders(BooksService.getOrdersList())
            // TODO
            // .then(({data}) => {
            //     setOrders(data);
            // });
    }, []);

    return (
        <div className="page-landing page-orders">
            <h1>My orders</h1>
            {orders.map((order) => {
                return (
                    <BookOrderCard order={order} />
                )
            })}
        </div>
    )
}

export default MyOrdersPage;