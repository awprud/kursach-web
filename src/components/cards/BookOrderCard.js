import React from 'react';
import "./index.css";

const BookOrderCard = ({order}) => {
    const {book} = order;

    return (
        <div className="list-card-manager">
            <div>
                <span className="book-info">{book.name} •</span>
                <span className="book-info">{book.year} •</span>
                <span className="book-info">{book.pages} •</span>
                <span className="book-info">{book.description}</span>
            </div>
            <div>
                <span className="book-price">{order.status}</span>
            </div>
        </div>
    )
}

export default BookOrderCard;