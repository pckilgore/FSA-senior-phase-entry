import React from 'react';

const StudentForm = props => (
  <form onSubmit={props.submitFn}>
    <div className="input-field">
      <input
        type="text"
        name="firstName"
        value={props.student.firstName}
        onChange={props.changeFn}
      />
      <label className={props.active} htmlFor="firstName">
        First Name
      </label>
      <span className="helper-text">Cannot be empty</span>
    </div>
    <div className="input-field">
      <input
        type="text"
        name="lastName"
        value={props.student.lastName}
        onChange={props.changeFn}
      />
      <label className={props.active} htmlFor="lastName">
        Last Name
      </label>
      <span className="helper-text">Cannot be empty</span>
    </div>
    <div className="input-field">
      <input
        type="email"
        name="email"
        value={props.student.email}
        onChange={props.changeFn}
      />
      <label className={props.active} htmlFor="email">
        Email
      </label>
      <span
        className="helper-text"
        data-error="Invalid Email"
        data-success="Valid Email!"
      >
        Must provide a valid email
      </span>
    </div>
    <div className="input-field">
      <input
        type="url"
        name="imageUrl"
        className="validate"
        value={props.student.imageUrl}
        onChange={props.changeFn}
      />
      <label className={props.active} htmlFor="imageUrl">
        Student Image Url
      </label>
      <span
        className="helper-text"
        data-error="Invalid URL"
        data-success="Valid URL!"
      >
        Must be a valid URL.
      </span>
    </div>
    <div className="input-field">
      <input
        type="number"
        name="gpa"
        className="validate"
        value={props.student.description}
        onChange={props.changeFn}
        step="0.01"
      />
      <label className={props.active} htmlFor="gpa">
        Student GPA
      </label>
      <span className="helper-text">Must be a decimal.</span>
    </div>
    <button
      className="btn waves-effect waves-light"
      disabled={
        !props.student.email ||
        !props.student.firstName ||
        !props.student.lastName
      }
      type="submit"
    >
      Submit
      <i className="material-icons right">send</i>
    </button>
  </form>
);

export default StudentForm;
