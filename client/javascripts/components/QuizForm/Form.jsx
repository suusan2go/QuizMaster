import React from 'react';
import Modal from 'react-modal';
import { browserHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form';

const titleInput = (field) => {
  const hasError = field.meta.error && field.meta.error.length !== 0;
  return (
    <div className={`md-form ${hasError && 'has-danger'}`}>
      <input
        placeholder="English Quiz 10 set"
        type="text" id="form5"
        className={`form-control ${hasError && 'form-control-danger '}`}
        {...field.input}
      />
      <label htmlFor={field.input.name} className="active">Quiz Title</label>
      {
        hasError && <div className="form-control-feedback">{field.meta.error}</div>
      }
    </div>
  );
};

const descriptionInput = (field) => {
  const hasError = field.meta.error && field.meta.error.length !== 0;
  return (
    <div className={`md-form ${hasError && 'has-danger'}`}>
      <textarea
        placeholder="This quiz include 10 set"
        type="text"
        id="form5"
        className={`md-textarea ${hasError && 'form-control-danger '}`}
        {...field.input}
      />
      <label htmlFor={field.input.name} className="active">Quiz Description</label>
      {
      hasError && <div className="form-control-feedback">{field.meta.error}</div>
    }
    </div>
  );
};

type Props = {
  handleSubmit: action,
  title: string,
}

class QuizForm extends React.Component {
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
        onRequestClose={QuizForm.closeModal}
        className="modal-open"
        overlayClassName="modal_overlay"
        contentLabel="Quiz Form Modal"
      >
        <div className="modal-dialog" role="document">
          <form onSubmit={handleSubmit}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{this.props.title}</h5>
                <button type="button" className="close" onClick={QuizForm.closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Field name="title" component={titleInput} />
                <Field name="description" component={descriptionInput} />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Start Creation</button>
                <button type="button" className="btn btn-secondary" onClick={QuizForm.closeModal}>Close</button>
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
  form: 'quizForm', // a unique name for this form
})(QuizForm);
