import React from 'react';
import { browserHistory } from 'react-router';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as questionFormActions from 'actions/questionFormActionCreators';
import QuestionForm from './Form';

type Props = {
  actions: { createQuestion: action },
}

class NewQuestionForm extends React.Component {
  static closeModal() {
    browserHistory.goBack();
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
        <QuestionForm onSubmit={this.props.actions.createQuestion} title="New Question" />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(questionFormActions, dispatch) }
);

const mapStateToProps = (state, ownProps) => ({
  ownProps,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestionForm);
