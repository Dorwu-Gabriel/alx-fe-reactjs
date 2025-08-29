import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .string('Username must be a string')
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be 20 characters or less'),
  email: Yup.string()
    .string('Email must be a string')
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string()
    .string('Password must be a string')
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
});

const FormikForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form submitted:', values);
    // Here you would typically make an API call
    setSubmitting(false);
  };

  return (
    <div className="registration-form">
      <h2>User Registration (Formik)</h2>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field
                type="text"
                id="username"
                name="username"
                className={errors.username && touched.username ? 'error' : ''}
              />
              <ErrorMessage name="username" component="span" className="error-message" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className={errors.email && touched.email ? 'error' : ''}
              />
              <ErrorMessage name="email" component="span" className="error-message" />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                className={errors.password && touched.password ? 'error' : ''}
              />
              <ErrorMessage name="password" component="span" className="error-message" />
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
