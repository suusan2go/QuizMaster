import React from 'react';
import Modal from 'react-modal';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserAnswerActions from 'actions/userAnswerActionCreators';

type Props = {
  params: { id: string },
  userAnswer: {
    correct: boolean,
    content: string,
    answer_content: string,
    question_content: string,
    quiz_trial_id: number,
  },
  actions: {
    getUserAnswer: action
  }
}

class UserAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.backToTrial = this.backToTrial.bind(this);
  }

  componentWillMount() {
    this.props.actions.getUserAnswer(this.props.params.id);
  }

  backToTrial() {
    browserHistory.push(`/quiz_trials/${this.props.userAnswer.quiz_trial_id}`);
  }

  flashMessage() {
    return this.props.userAnswer.correct ?
      <div className="alert alert-success">Your Answer is Correct.</div> :
      <div className="alert alert-danger">Your Answer is Wrong.</div>;
  }

  props: Props

  render() {
    return (
      <div>
        <Helmet
          title="New Question Form | QuizMaster"
          description="QuizMaster question edit form"
          meta={[
            { charset: 'utf-8' },
          ]}
        />
        <Modal
          isOpen
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.backToTrial}
          className="modal-open"
          overlayClassName="modal_overlay"
          contentLabel="Quiz Form Modal"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title">
                  Results
                </h1>
                <button type="button" className="close" onClick={UserAnswer.backToTrial}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {this.flashMessage()}
                <div className="card">
                  <div className="card-block">
                    <p className="lead">Your Answer</p>
                    <p>{this.props.userAnswer.content}</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-block">
                    <p className="lead red-text">Answer</p>
                    <p className="red-text">{this.props.userAnswer.answer_content}</p>
                    <p className="lead">Question</p>
                    <div className="mb-1" dangerouslySetInnerHTML={{ __html: this.props.userAnswer.question_content }} />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary" onClick={this.backToTrial}>Next</button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(UserAnswerActions, dispatch) }
);

const mapStateToProps = (state, ownProps) => ({
  userAnswer: state.userAnswer,
  ownProps,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAnswer);
