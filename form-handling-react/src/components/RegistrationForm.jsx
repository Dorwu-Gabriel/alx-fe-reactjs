import { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be 20 characters or less')
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const RegistrationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const validateForm = (values) => {
    const errors = {};
    if (!username) {
      errors.username = 'Username is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  };

  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    const errors = validateForm(values);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      setSubmitting(false);
      return;
    }
    
    console.log('Form submitted:', values);
    // Here you would typically make an API call
    setIsSubmitted(true);
    setSubmitting(false);
    setFormErrors({});
  };

  return (
    <div className="registration-form">
      <h2>User Registration</h2>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: ''
        }}
        validate={validateForm}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                className={(errors.username || formErrors.username) ? 'error' : ''}
              />
              <ErrorMessage name="username" component="span" className="error-message">
                {msg => <div className="error-message">{msg}</div>}
              </ErrorMessage>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                className={(errors.email || formErrors.email) ? 'error' : ''}
              />
              <ErrorMessage name="email" component="span" className="error-message">
                {msg => <div className="error-message">{msg}</div>}
              </ErrorMessage>
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                className={(errors.password || formErrors.password) ? 'error' : ''}
              />
              <ErrorMessage name="password" component="span" className="error-message">
                {msg => <div className="error-message">{msg}</div>}
              </ErrorMessage>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitted ? 'Submitted!' : (isSubmitting ? 'Submitting...' : 'Register')}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
