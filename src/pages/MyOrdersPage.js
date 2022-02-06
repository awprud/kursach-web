import React, {useEffect, useState} from 'react';
import "./index.css";
import BooksService from "../services/BooksService";
import BookOrderCard from "../components/cards/BookOrderCard";
import {roleUser} from "../constants";
import useRedirectUnauthorized from "../hooks/useRedirectUnauthorized";

const MyOrdersPage = () => {
    const [orders, setOrders] = useState([]);

    useRedirectUnauthorized(roleUser);

    useEffect(() => {
        BooksService.getOrdersList()
            .then(({data}) => {
                console.log(data)
                setOrders(data);
            });
    }, []);

    return (
        <div className="page-landing page-orders">
            <h1>My orders</h1>
            {orders.map((order, index) => {
                return (
                    <BookOrderCard key={`order-${index}`} order={order}/>
                )
            })}
        </div>
    )
}

export default MyOrdersPage;