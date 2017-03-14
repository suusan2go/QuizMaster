import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as quizFormActions from 'actions/quizFormActionCreators';
import QuestionForm from './Form';

type Props = {
  actions: { createQuiz: action },
}

class QuizForm extends React.Component {
  props: Props

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
        <QuestionForm onSubmit={this.props.actions.createQuiz} title="New Title" />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(quizFormActions, dispatch) }
);

const mapStateToProps = (state, ownProps) => ({
  ownProps,
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizForm);
