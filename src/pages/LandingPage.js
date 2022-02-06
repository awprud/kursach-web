import React, {useEffect, useState} from 'react';
import "./index.css";
import BookListCard from "../components/cards/BookListCard";
import {booksAvailable} from '../mok/apiMokTemp';
import {roleGuest} from "../constants";
import AuthService from "../services/AuthService";
import BooksService from "../services/BooksService";

const LandingPage = () => {
    const user = AuthService.getUser();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        BooksService.getList()
            .then(({data}) => {
                setBooks(data);
            });
    }, []);

    return (
        <div className="page-landing">
            {booksAvailable.map((book) => {
                return (
                    <BookListCard book={book} user={user} />
                )
            })}
        </div>
    )
}

export default LandingPage;