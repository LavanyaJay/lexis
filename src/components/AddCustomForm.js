import React from "react";
import { Field, Form, reduxForm } from "redux-form";

function AddCustomForm(props) {
  const ans = "Answer";
  return (
    <div className="part4">
      <Form onSubmit={props.addFlashCard} className="form-group form-inline">
        <div className="input">
          <label className="label">Question</label>
          <div>
            <Field
              className="field"
              name="word"
              value={props.formData.word}
              component="textarea"
              type="text"
              placeholder="Enter the word"
              onChange={props.onChangeHandler}
            />
          </div>
        </div>
        <div className="input">
          <label className="label">{ans}</label>

          <div>
            <Field
              className="field"
              name="meaning"
              value={props.formData.meaning}
              component="textarea"
              type="text"
              placeholder="Meaning of the word"
              onChange={props.onChangeHandler}
            />
          </div>
        </div>
        <div>
          <button className="addBtnClass" type="submit">
            Add
          </button>
        </div>
      </Form>
    </div>
  );
}
export default reduxForm({
  form: "simple" // a unique identifier for this form
})(AddCustomForm);
