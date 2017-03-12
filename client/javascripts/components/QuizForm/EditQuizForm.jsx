import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as quizFormActions from 'actions/quizFormActionCreators';
import QuestionForm from './Form';

type Props = {
  actions: { updateQuiz: action },
  myQuiz: { id: string, title: string, description: string }
}

class EditQuizForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  props: Props

  handleSubmit(values) {
    this.props.actions.updateQuiz({ values, quizId: this.props.myQuiz.id });
  }

  render() {
    return (
      <div>
        <Helmet
          title="New Quize Form | QuizMaster"
          description="QuizMaster quizez"
          meta={[
            { charset: 'utf-8' },
          ]}
        />
        <QuestionForm onSubmit={this.handleSubmit} title="Edit Title" initialValues={this.props.myQuiz} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(quizFormActions, dispatch) }
);

const mapStateToProps = (state, ownProps) => ({
  myQuiz: state.myQuiz,
  ownProps,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditQuizForm);
