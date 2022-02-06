import React, {useEffect, useState} from 'react';
import "./index.css";
import BooksService from "../services/BooksService";
import AdminOrderCard from "../components/cards/AdminOrderCard";

const statusFilters = {
    all: 'All',
    new: 'New',
    finished: 'Finished',
};

const AdminOrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [statusFilter, setStatusFilter] = useState(statusFilters.all);

    useEffect(() => {
        BooksService.getOrdersList()
            .then(({data}) => {
                console.log(data)
                setOrders(data);
            });
    }, []);

    return (
        <div className="page-landing page-orders">
            <h1>Orders</h1>
            <div className="filters-wr">
                <div
                    className={statusFilter===statusFilters.all ? 'active' : 'inactive'}
                    onClick={() => setStatusFilter(statusFilters.all)}
                >
                    {statusFilters.all}
                </div>
                <div
                    className={statusFilter===statusFilters.new ? 'active' : 'inactive'}
                    onClick={() => setStatusFilter(statusFilters.new)}
                >
                    {statusFilters.new}
                </div>
                <div
                    className={statusFilter===statusFilters.finished ? 'active' : 'inactive'}
                    onClick={() => setStatusFilter(statusFilters.finished)}
                >
                    {statusFilters.finished}
                </div>
            </div>
            {orders
                .filter(order => order.status===statusFilter || statusFilter===statusFilters.all)
                .map((order, index) => {
                return (
                    <AdminOrderCard key={`order-${index}`} order={order}/>
                )
            })}
        </div>
    )
}

export default AdminOrdersPage;