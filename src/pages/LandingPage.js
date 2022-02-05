import React from 'react';
import "./index.css";
import BookListCard from "../components/cards/BookListCard";
import {booksAvailable} from '../mok/apiMokTemp';
import {roleGuest} from "../constants";

const LandingPage = () => {
    return (
        <div className="page-landing">
            {booksAvailable.map((book) => {
                return (
                    <BookListCard book={book} role={roleGuest} />
                )
            })}
        </div>
    )
}

export default LandingPage;