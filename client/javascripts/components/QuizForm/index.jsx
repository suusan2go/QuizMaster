import React from 'react';
import Modal from 'react-modal';
import { browserHistory } from 'react-router';
import Helmet from 'react-helmet';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as quizFormActions from 'actions/quizFormActionCreators';

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
  actions: { postQuiz: action },
  handleSubmit: action,
}

class QuizForm extends React.Component {
  static closeModal() {
    browserHistory.goBack();
  }

  props: Props

  render() {
    const { actions, handleSubmit } = this.props;
    return (
      <div>
        <Helmet
          title="New Quize Form | QuizMaster"
          description="QuizMaster quizez"
          meta={[
            { charset: 'utf-8' },
          ]}
        />
        <Modal
          isOpen
          onAfterOpen={this.afterOpenModal}
          onRequestClose={QuizForm.closeModal}
          className="modal-open"
          overlayClassName="modal_overlay"
          contentLabel="Quiz Form Modal"
        >
          <div className="modal-dialog" role="document">
            <form onSubmit={handleSubmit(actions.postQuiz)}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">New Quiz</h5>
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
      </div>
    );
  }
}

// Decorate the form component
const DecoratedQuizForm = reduxForm({
  form: 'quizForm', // a unique name for this form
})(QuizForm);


const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(quizFormActions, dispatch) }
);

const mapStateToProps = (state, ownProps) => ({
  ownProps,
});

export default connect(mapStateToProps, mapDispatchToProps)(DecoratedQuizForm);
