import React, {useEffect, useState} from 'react';
import {Field, Form, Formik} from "formik";
import "./index.css";
import Modal from "../Modal/Modal";
import BooksService from "../../services/BooksService";
import AuthorsService from "../../services/AuthorsService";

const INITIAL_VALUES = {
    name: '',
    year: '',
    pages: 0,
    price: '',
    description: '',
    author: null,
};

const BookEditModal = ({isOpen, toggle, book, onClose}) => {
    const editMode = !!book;
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        AuthorsService.getList()
            .then(({data}) => setAuthors(data));
    }, []);

    return (
        <Modal
            isOpen={isOpen}
            className="modal-book"
        >
            <Formik
                initialValues={book || INITIAL_VALUES}
                onSubmit={(values) => {
                    if (editMode) {
                        BooksService.edit(values).then(() => {
                            toggle();
                            window.location.reload();
                        });
                    } else {
                        BooksService.create(values).then(() => {
                            toggle();
                            window.location.reload();
                        });
                    }
                }}
                onReset={onClose}
            >
                <Form className="book-form">
                    <h2>{editMode ? 'Edit book' : 'Create book'}</h2>
                    <div className="row">
                        <label>Name</label>
                        <Field
                            type="text"
                            name="name"
                        />
                    </div>
                    <div className="row">
                        <label>Year</label>
                        <Field
                            type="text"
                            name="year"
                        />
                    </div>
                    <div className="row">
                        <label>Pages count</label>
                        <Field
                            type="number"
                            min="1"
                            name="pages"
                        />
                    </div>
                    <div className="row">
                        <label>Price</label>
                        <Field
                            type="number"
                            min="0"
                            name="price"
                        />
                        <span>$</span>
                    </div>
                    <div className="row">
                        <label>Description</label>
                        <Field
                            type="text"
                            name="description"
                        />
                    </div>
                    <div className="row">
                        <label>Author</label>
                        <Field
                            as="select"
                            name="author"
                        >
                            {authors.map((author) => {
                                return (
                                    <option key={`author-${author.id}`} value={author.id}>{author.name}</option>
                                )
                            })}
                        </Field>
                    </div>
                    <button
                        type="submit"
                    >
                        Submit
                    </button>
                    <button
                        type="reset"
                        onClick={toggle}
                    >
                        Cancel
                    </button>
                </Form>
            </Formik>
        </Modal>
    )
}

export default BookEditModal;