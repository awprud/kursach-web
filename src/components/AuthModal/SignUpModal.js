import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import AuthService from "../../services/AuthService";
import "./index.css";
import Modal from "../Modal/Modal";
import {roleUser} from "../../constants";

const SignUpModal = ({isOpen, toggle, setUser}) => {
    return (
        <Modal
            isOpen={isOpen}
            className="modal-auth"
        >
            <Formik
                onSubmit={(values, {setFieldError}) => {
                    const {password, email, username} = values;
                    AuthService.register({
                        password,
                        email,
                        username,
                        role: roleUser
                    })
                        .then(() => {
                            return AuthService.login({
                                password,
                                email
                            });
                        })
                        .then((data) => {
                            setUser({
                                token: data?.token,
                                ...data?.user
                            });

                            toggle();
                            window.location.reload();
                        })
                        .catch(() => {
                            setFieldError('password', 'Please, fill all fields correctly');
                        })
                }}
                initialValues={{
                    password: "",
                    email: "",
                    username: "",
                }}
            >
                <Form className="auth-form">
                    <h2>Sign Up!</h2>
                    <label>Email</label>
                    <Field
                        type="text"
                        name="email"
                    />
                    <label>Username</label>
                    <Field
                        type="text"
                        name="username"
                    />
                    <label>Password</label>
                    <Field
                        type="text"
                        name="password"
                    />
                    <ErrorMessage name="password" />
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

export default SignUpModal;