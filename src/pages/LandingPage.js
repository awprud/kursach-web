import React, {useEffect, useState} from 'react';
import "./index.css";
import BookListCard from "../components/cards/BookListCard";
import {booksAvailable} from '../mok/apiMokTemp';
import {roleAdmin, roleGuest} from "../constants";
import AuthService from "../services/AuthService";
import BooksService from "../services/BooksService";
import BookEditModal from "../components/BookEditModal";
import useModal from "../hooks/useModal";

const LandingPage = () => {
    const user = AuthService.getUser();
    const [books, setBooks] = useState([]);
    const [editingBook, setEditingBook] = useState(null);

    const {isOpen, toggle} = useModal();

    const handleBookEdit = (book) => {
        setEditingBook(book);
        toggle();
    }

    useEffect(() => {
        BooksService.getList()
            .then(({data}) => {
                setBooks(data);
            });
    }, []);

    return (
        <>
            {user.role === roleAdmin &&
                <BookEditModal
                    book={editingBook}
                    isOpen={isOpen}
                    toggle={toggle}
                />
            }
            <div className="page-landing">
                {booksAvailable.map((book) => {
                    return (
                        <BookListCard book={book} user={user} handleEdit={() => handleBookEdit(book)}/>
                    )
                })}
            </div>
        </>
    )
}

export default LandingPage;