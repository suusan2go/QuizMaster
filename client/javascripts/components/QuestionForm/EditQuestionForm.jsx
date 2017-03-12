import React from 'react';
import { browserHistory } from 'react-router';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as questionFormActions from 'actions/questionFormActionCreators';
import QuestionForm from './Form';

type Props = {
  actions: { createQuestion: action },
  params: { id: string },
  questions: Array<{ content: string, answer_content: string }>
}

class NewQuestionForm extends React.Component {
  static closeModal() {
    browserHistory.goBack();
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.question = this.question.bind(this);
  }

  handleSubmit(values) {
    this.props.actions.updateQuestion({ values, questionId: this.props.params.id });
  }

  question() {
    const { myQuiz: { questions }, params: { id } } = this.props;
    return questions.find(q => q.id === parseInt(id, 10));
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
        <QuestionForm onSubmit={this.handleSubmit} title="Edit Question" initialValues={this.question()} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(questionFormActions, dispatch) }
);

const mapStateToProps = (state, ownProps) => ({
  myQuiz: state.myQuiz,
  ownProps,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestionForm);
