import React from 'react';
import "./index.css";
import {roleAdmin, roleUser} from "../../constants";
import BooksService from "../../services/BooksService";

const BookListCard = ({user, book, handleEdit}) => {
    return (
        <div className="list-card-manager">
            <div>
                <span className="book-info">{book.name} •</span>
                <span className="book-info">{book.year} •</span>
                <span className="book-info">{book.pages} •</span>
                <span className="book-info">{book.description}</span>
            </div>
            <div>
                <span className="book-price">{book.price}$</span>
                {
                    user?.role === roleUser ? (
                        <>
                            <input
                                id={`book-count-${book.name}`}
                                type="number" min="1"
                                max="50"
                                defaultValue={1}
                            />
                            <button
                                className="purchase-button"
                                onClick={() => {
                                    const count = parseInt(document.getElementById(`book-count-${book.name}`).value);
                                    BooksService.makeOrder({
                                        quantity: count,
                                        book: book.id,
                                        user: user.id,
                                    }).then((data) => {
                                        // TODO: handle success
                                    });
                                }}
                            >
                                Buy now!
                            </button>
                        </>
                    ) : user?.role === roleAdmin ? (
                        <button className="purchase-button" onClick={handleEdit}>Edit</button>
                    ) : null
                }
            </div>
        </div>
    )
}

export default BookListCard;