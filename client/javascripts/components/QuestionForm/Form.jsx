import React from 'react';
import Modal from 'react-modal';
import { browserHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form';

const contentInput = (field) => {
  const hasError = field.meta.error && field.meta.error.length !== 0;
  return (
    <div className={`md-form ${hasError && 'has-danger'}`}>
      <textarea
        placeholder="How many letters are there in the English alphabet?"
        type="text"
        id="form5"
        className={`md-textarea ${hasError && 'form-control-danger '}`}
        {...field.input}
      />
      <label htmlFor={field.input.name} className="active">Question</label>
      {
      hasError && <div className="form-control-feedback">{field.meta.error}</div>
    }
    </div>
  );
};

const answerInput = (field) => {
  const hasError = field.meta.error && field.meta.error.length !== 0;
  return (
    <div className={`md-form ${hasError && 'has-danger'}`}>
      <input
        placeholder="26"
        type="text" id="form5"
        className={`form-control ${hasError && 'form-control-danger '}`}
        {...field.input}
      />
      <label htmlFor={field.input.name} className="active">Answer</label>
      {
        hasError && <div className="form-control-feedback">{field.meta.error}</div>
      }
    </div>
  );
};

type Props = {
  title: string,
  handleSubmit: action,
}

class QuestionForm extends React.Component {
  static closeModal() {
    browserHistory.goBack();
  }

  props: Props

  render() {
    const { handleSubmit } = this.props;
    return (
      <Modal
        isOpen
        onAfterOpen={this.afterOpenModal}
        onRequestClose={QuestionForm.closeModal}
        className="modal-open"
        overlayClassName="modal_overlay"
        contentLabel="Quiz Form Modal"
      >
        <div className="modal-dialog" role="document">
          <form onSubmit={handleSubmit}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{this.props.title}</h5>
                <button type="button" className="close" onClick={QuestionForm.closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Field name="content" component={contentInput} />
                <Field name="answer_content" component={answerInput} />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">SAVE</button>
                <button type="button" className="btn btn-secondary" onClick={QuestionForm.closeModal}>Close</button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}

// Decorate the form component
export default reduxForm({
  form: 'questionForm', // a unique name for this form
})(QuestionForm);
