import React from 'react';
import {Field, Form, Formik} from "formik";
import "./index.css";
import Modal from "../Modal/Modal";
import BooksService from "../../services/BooksService";

const INITIAL_VALUES = {
    name: '',
    year: '',
    pages: 0,
    price: '',
    description: ''
};

const BookEditModal = ({isOpen, toggle, book}) => {
    const editMode = !!book;

    return (
        <Modal
            isOpen={isOpen}
            className="modal-book"
        >
            <Formik
                initialValues={book || INITIAL_VALUES}
                onSubmit={(values) => {
                    if (editMode) {
                        BooksService.put(values).then(toggle);
                    } else {
                        BooksService.create(values).then(toggle);
                    }
                }}
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