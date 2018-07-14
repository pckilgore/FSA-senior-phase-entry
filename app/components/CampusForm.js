import React from 'react';

const CampusForm = props => (
  <form onSubmit={props.submitFn}>
    <div className="input-field">
      <input
        type="text"
        name="name"
        value={props.campus.name}
        onChange={props.changeFn}
      />
      <label className={props.active} htmlFor="name">
        Campus Name
      </label>
      <span className="helper-text">Cannot be empty</span>
    </div>
    <div className="input-field">
      <input
        type="text"
        name="address"
        value={props.campus.address}
        onChange={props.changeFn}
      />
      <label className={props.active} htmlFor="address">
        Campus Address
      </label>
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
      <label className={props.active} htmlFor="imageUrl">
        Campus Image Url
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
      <textarea
        id="resizeTextArea"
        name="description"
        className="materialize-textarea"
        value={props.campus.description}
        onChange={props.changeFn}
      />
      <label className={props.active} htmlFor="description">
        Campus Description
      </label>
    </div>
    <button
      className="btn waves-effect waves-light"
      disabled={!props.campus.name || !props.campus.address}
      type="submit"
    >
      Submit
      <i className="material-icons right">send</i>
    </button>
    {[
      () =>
        setTimeout(() => {
          M.textareaAutoResize($('#resizeTextArea'));
        }, 100),
    ].forEach(func => func())}
  </form>
);
