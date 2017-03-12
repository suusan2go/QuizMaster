import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as quizFormActions from 'actions/quizFormActionCreators';
import QuestionForm from './Form';

type Props = {
  actions: { postQuiz: action },
}

class QuizForm extends React.Component {
  props: Props

  render() {
    const { actions } = this.props;
    return (
      <div>
        <Helmet
          title="New Quize Form | QuizMaster"
          description="QuizMaster quizez"
          meta={[
            { charset: 'utf-8' },
          ]}
        />
        <QuestionForm onSubmit={actions.postQuiz} title="New Title" />
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
