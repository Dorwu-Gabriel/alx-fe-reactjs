import React from 'react';
import './App.css';
import FormikForm from './components/formikForm.jsx';

function App() {
  return (
    <div className="app">
      <h1>User Registration</h1>
      <div className="form-container">
        <FormikForm />
      </div>
    </div>
  );
}

export default App;