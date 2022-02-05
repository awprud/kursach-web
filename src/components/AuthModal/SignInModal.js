import React from 'react';
import {Field, Form, Formik} from "formik";
import AuthService from "../../services/AuthService";
import "./index.css";
import Modal from "../Modal/Modal";

const SignInModal = ({isOpen, toggle, setUser}) => {
    return (
        <Modal
            isOpen={isOpen}
            className="modal-auth"
        >
                <Formik
                    onSubmit={(values) => {
                        const {password, email} = values;
                        AuthService.login({
                            password,
                            email
                        })
                            .then((data) => {
                                setUser({
                                    token: data?.token,
                                    ...data?.user
                                });

                                toggle();
                            })
                    }}
                    initialValues={{
                        password: "",
                        email: "",
                    }}
                >
                    <Form className="auth-form">
                        <h2>Sign In!</h2>
                        <label>Email</label>
                        <Field
                            type="text"
                            name="email"
                        />
                        <label>Password</label>
                        <Field
                            type="text"
                            name="password"
                        />
                        <button
                            type="submit"
                        >
                            Login
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

export default SignInModal;