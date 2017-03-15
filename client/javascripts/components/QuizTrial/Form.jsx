import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './style.modules.scss';

const answerInput = (field) => {
  const hasError = field.meta.error && field.meta.error.length !== 0;
  return (
    <div className={`md-form form-group ${hasError && 'has-danger'}`}>
      <input
        placeholder="Type Your Answer"
        type="text" id="answer"
        className={`form-control ${hasError && 'form-control-danger'}`}
        {...field.input}
      />
      <label htmlFor="answer" className="active">Answer</label>
      {
        hasError && <div className={`form-control-feedback ${styles.error}`}>{field.meta.error}</div>
      }
    </div>
  );
};

type Props = {
  handleSubmit: action
}

class AnswerForm extends React.Component {
  props: Props

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="form-inline float-right" onSubmit={handleSubmit}>
        <Field name="content" component={answerInput} />
        <div className="md-form form-group">
          <button className="btn btn-primary btn-lg" type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

// Decorate the form component
export default reduxForm({
  form: 'quizTrialAnswerForm', // a unique name for this form
})(AnswerForm);
