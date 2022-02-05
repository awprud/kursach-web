import React from 'react';
import {Field, Form, Formik} from "formik";
import AuthService from "../../services/AuthService";
import "./index.css";
import Modal from "../Modal/Modal";

const SignInModal = ({isOpen, toggle}) => {
    return (
        <Modal
            isOpen={isOpen}
            toggle={toggle}
            className="modal-auth"
        >
                <Formik
                    onSubmit={(values) => {
                        const {password, email} = values;
                        AuthService.login({
                            password,
                            email
                        })
                    }}
                    initialValues={{
                        password: "",
                        email: "",
                    }}
                >
                    <Form>
                        <Field
                            type="text"
                            name="email"
                        />
                        <Field
                            type="text"
                            name="password"
                        />
                    </Form>
                </Formik>
        </Modal>
    )
}

export default SignInModal;