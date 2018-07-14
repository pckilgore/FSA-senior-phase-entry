import React from 'react';

const isValidGpa = gpa => {
  if (Number.isNaN(gpa)) return true;
  if (typeof +gpa === 'number' && gpa >= 0 && gpa <= 4) return true;
  return false;
};

const StudentForm = props => (
  <form onSubmit={props.submitFn}>
    <div className="input-field">
      <input
        type="text"
        name="firstName"
        className={props.student.firstName ? 'valid' : 'invalid'}
        value={props.student.firstName}
        onChange={props.changeFn}
      />
      <label className={props.active} htmlFor="firstName">
        First Name
      </label>
      <span className="helper-text" data-error="Cannot be empty" />
    </div>
    <div className="input-field">
      <input
        type="text"
        name="lastName"
        className={props.student.lastName ? 'valid' : 'invalid'}
        value={props.student.lastName}
        onChange={props.changeFn}
      />
      <label className={props.active} htmlFor="lastName">
        Last Name
      </label>
      <span className="helper-text" data-error="Cannot be empty" />
    </div>
    <div className="input-field">
      <input
        type="email"
        name="email"
        className={`validate ${props.student.email ? 'valid' : 'invalid'}`}
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
      />
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
      />
    </div>
    <div className="input-field">
      <input
        type="number"
        name="gpa"
        className={
          Number.isNaN(props.student.gpa)
            ? ''
            : isValidGpa(props.student.gpa)
              ? 'valid'
              : 'invalid'
        }
        value={props.student.gpa ? props.student.gpa : ''}
        onChange={props.changeFn}
        step="0.01"
      />
      <label className={props.active} htmlFor="gpa">
        Student GPA
      </label>
      <span
        className="helper-text"
        data-error="Invalid GPA: Must be a number between 0-4."
        data-success="Valid GPA!"
      />
    </div>
    <div className="input-field">
      <select
        name="campusId"
        onChange={props.changeFn}
        value={props.student.campusId}
      >
        <option>None</option>
        {props.campuses.map(campus => (
          <option key={campus.id} value={campus.id}>
            {campus.name}
          </option>
        ))}
      </select>
      <label>Select A Campus</label>
    </div>
    <button
      className="btn waves-effect waves-light"
      disabled={
        !props.student.email ||
        !props.student.firstName ||
        !props.student.lastName ||
        !isValidGpa(props.student.gpa)
      }
      type="submit"
    >
      Submit
      <i className="material-icons right">send</i>
    </button>
    {[
      () =>
        setTimeout(() => {
          $(document).ready(function() {
            $('select').formSelect();
          });
        }, 100),
    ].forEach(fn => fn())}
  </form>
);

export default StudentForm;
