import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { withRouter } from 'react-router-dom';
import './style.css'

function SignUp(props) {

    let initialValues = {
        userName: '',
        password: '',
        email:'',
        confirmPassword:'',
        remember: false

    }

    let validationSchema = yup.object().shape({
        userName:yup.string().min(3).max(10).required("name is required"),
        email: yup.string().email("enter valid email").required("email is required"),
        password: yup.string().required("password is required").min(5),
        confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
    })

    let onSubmit = (values, props) => {
        console.log(values);
        props.resetForm()
    }
    let navigateToLogin=()=>{
        // console.log(props);
        props.history.push('/')
       }
    return (
        <div className='container border mt-5'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>

                {(props) => (
                    <Form>
                        <div className='container'>

                            <div className="mb-3">
                                <label>Name</label>
                                <Field

                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    name="userName"
                                    autoComplete="off"

                                />
                                <p className='error'><ErrorMessage name="userName" /></p>
                            </div>
                            <div className="mb-3">
                                <label className='foremail'>Email</label>
                                <Field

                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Email"
                                    name="email"
                                    autoComplete="off"

                                />
                                <p className='error'><ErrorMessage name="email" /></p>
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <Field

                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    name="password"
                                />
                                <p className='error'><ErrorMessage name="password" /></p>

                            </div>
                            <div className="mb-3">
                                <label>Confirm Password</label>
                                <Field

                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Confirm Password"
                                    name="confirmPassword"
                                />
                                <p className='error'><ErrorMessage name="confirmPassword" /></p>

                            </div>
                            <div>
                                <Field
                                    type="checkbox"
                                    className="form-check-input"
                                    id="exampleCheck1"
                                    name="remember"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" >Signup</button>

                            <h4 style={{ cursor: 'pointer' }} onClick={navigateToLogin} >Already have an account? Click here to Login</h4>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default withRouter(SignUp) 
