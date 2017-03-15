import React from 'react';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as quizTrialActions from 'actions/quizTrialActionCreators';
import Form from './Form';

type Props = {
  params: { id: string },
  quizTrial: {
    id: string,
    next_question: {
      id: string,
      content: string,
    }
  },
  actions: {
    getQuizTrial: action,
    submitQuizTrialAnswer: action,
  }
}

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(quizTrialActions, dispatch) }
);

const mapStateToProps = (state, ownProps) => ({
  quizTrial: state.quizTrial,
  ownProps,
});

class QuizTrial extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.actions.getQuizTrial(this.props.params.id);
  }

  handleSubmit(values) {
    this.props.actions.submitQuizTrialAnswer({
      quizTrialId: this.props.quizTrial.id,
      values: {
        question_id: this.props.quizTrial.next_question.id,
        ...values,
      } });
  }

  props: Props

  render() {
    return (
      <div>
        <Helmet
          title="Quiz Trial | QuizMaster"
          description="QuizMaster quiz trial"
          meta={[
            { charset: 'utf-8' },
          ]}
        />
        <div className="container">
          <div className="page-header">
            <h1 className="h1-responsive">Quiz Trial</h1>
          </div>
          <div className="progress mb-1">
            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" />
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-block">
                  <div className="mb-2" dangerouslySetInnerHTML={{ __html: this.props.quizTrial.next_question.content }} />
                  <Form onSubmit={this.handleSubmit} initialValues={{ content: '' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizTrial);
