import React from 'react';
import "./index.css";
import {roleAdmin, roleUser} from "../../constants";

const BookListCard = ({role, book}) => {
    return (
        <div className="list-card-manager">
            <div>
                <span className="book-info">{book.name} •</span>
                <span className="book-info">{book.year} •</span>
                <span className="book-info">{book.pagesCount} •</span>
                <span className="book-info">{book.description}</span>
            </div>
            <div>
                <span className="book-price">{book.price}</span>
                {
                    role === roleUser ? (
                        <button className="purchase-button">Buy now!</button>
                    ) : role === roleAdmin ? (
                        <button className="purchase-button">Edit</button>
                    ) : null
                }
            </div>
        </div>
    )
}

export default BookListCard;