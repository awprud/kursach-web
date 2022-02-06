import React from 'react';
import "./index.css";

const BookOrderCard = ({order}) => {
    const {book, author, status, price, quantity} = order;

    return (
        <div className="list-card-manager">
            <div>
                <span className="book-info">{book} •</span>
                <span className="book-info">{author} </span>
                <span className="book-info quantity">x{quantity}</span>
            </div>
            <div>
                <span className="book-price">{price}$</span>
                <span className="book-info">{status}</span>
            </div>
        </div>
    )
}

export default BookOrderCard;