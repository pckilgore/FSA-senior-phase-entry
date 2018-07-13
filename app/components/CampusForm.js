import React from 'react';

const validInput = prop => (prop ? 'hidden' : 'visible');

const CampusForm = props => (
  <form onSubmit={props.submitFn}>
    <div className="input-field">
      <input
        type="text"
        name="name"
        value={props.campus.name}
        onChange={props.changeFn}
      />
      <label htmlFor="name">Campus Name</label>
      <span className="helper-text">Cannot be empty</span>
    </div>
    <div className="input-field">
      <input
        type="text"
        name="address"
        value={props.campus.address}
        onChange={props.changeFn}
      />
      <label htmlFor="address">Campus Address</label>
      <span className="helper-text">Cannot be empty</span>
    </div>
    <div className="input-field">
      <input
        type="url"
        name="imageUrl"
        className="validate"
        value={props.campus.imageUrl}
        onChange={props.changeFn}
      />
      <label htmlFor="imageUrl">Campus Image Url</label>
      <span
        className="helper-text"
        data-error="Invalid URL"
        data-success="Valid URL!"
      >
        Must be a valid URL.
      </span>
    </div>
    <div className="input-field">
      <textarea
        name="description"
        className="materialize-textarea validate"
        value={props.campus.description}
        onChange={props.changeFn}
      />
      <label htmlFor="description">Campus Description</label>
    </div>

    <button
      className="btn waves-effect waves-light"
      disabled={!props.campus.name || !props.campus.address}
      type="submit"
    >
      Submit
      <i className="material-icons right">send</i>
    </button>
  </form>
);

export default CampusForm;
