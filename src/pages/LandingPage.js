import React, {useEffect, useState} from 'react';
import "./index.css";
import BookListCard from "../components/cards/BookListCard";
import {roleAdmin} from "../constants";
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
                    onClose={() => setEditingBook(null)}
                />
            }
            <div className="page-landing">
                {books.map((book, index) => {
                    return (
                        <BookListCard key={index} book={book} user={user} handleEdit={() => handleBookEdit(book)}/>
                    )
                })}
                {user.role === roleAdmin &&
                <div
                    className="add-book-button"
                    onClick={() => {
                        toggle();
                    }}
                >
                    <span>+</span>
                </div>}
            </div>
        </>
    )
}

export default LandingPage;