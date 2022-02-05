import React from 'react';
import {Modal} from "reactstrap";
import {useFormik, Field, Form} from "formik";

const SignInModal = ({isOpen, toggle}) => {
    const formik = useFormik({
        isInitialValid: false,

    });

    return (
        <Modal>
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
        </Modal>
    )
}