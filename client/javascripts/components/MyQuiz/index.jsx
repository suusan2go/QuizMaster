import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as myQuizActions from 'actions/myQuizActionCreators';
import * as quizFormActions from 'actions/quizFormActionCreators';
import * as questionFormActions from 'actions/questionFormActionCreators';

const mapDispatchToProps = dispatch => (
  {
    actions: {
      ...bindActionCreators(myQuizActions, dispatch),
      ...bindActionCreators(quizFormActions, dispatch),
      ...bindActionCreators(questionFormActions, dispatch),
    },
  }
);

const mapStateToProps = (state, ownProps) => ({
  myQuiz: state.myQuiz,
  ownProps,
});

type Props = {
  actions: { getMyQuiz: action, deleteQuestion: action, deleteQuiz: action },
  myQuiz: {
    title: string, descriptn: string, id: string,
    questions: Array<{ id: string, content: string, answer_content: string }>
  },
  params: { id: string }
}

class myQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteQuiz = this.handleDeleteQuiz.bind(this);
  }

  componentWillMount() {
    this.props.actions.getMyQuiz(this.props.params.id);
  }

  handleDeleteQuestion(questionID) {
    return () => {
      this.props.actions.deleteQuestion(questionID);
    };
  }

  handleDeleteQuiz() {
    this.props.actions.deleteQuiz(this.props.myQuiz.id);
  }

  props: Props

  render() {
    const quiz = this.props.myQuiz;
    const { questions } = this.props.myQuiz;
    return (
      <div>
        <Helmet
          title="MyQuizzes | QuizMaster"
          description="QuizMaster My quizez"
          meta={[
            { charset: 'utf-8' },
          ]}
        />
        <div className="container">
          <div className="page-header">
            <h1 className="h1-responsive d-inline-block">
              { quiz.title }
            </h1>
            <Link to={`/quizzes/${quiz.id}/edit`} className="btn btn-default float-right">
              EDIT QUIZ
            </Link>
            <button onClick={this.handleDeleteQuiz} className="btn btn-danger float-right">
              DELETE QUIZ
            </button>
            <div>
              <p>
                { quiz.description }
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-1">
              <Link to={`/users/quizzes/${quiz.id}/questions/new`} className="btn btn-primary float-right">
              ADD QESTION
            </Link>
            </div>
            <div className="col-12">
              {
                questions.map(question => (
                  <div className="list-group" key={question.id}>
                    <div className="list-group-item list-group-item-action align-items-start">
                      <div className="col-sm-10 justify-content-between">
                        <h3 className="mr-auto">Question</h3>
                        <div className="mb-2" dangerouslySetInnerHTML={{ __html: question.content }} />
                        <h3 className="mr-auto">Answer</h3>
                        <p>{question.answer_content}</p>
                      </div>
                      <div className="col-sm-2">
                        <Link to={`/users/questions/${question.id}/edit`} className="btn btn-md btn-block btn-default">Edit</Link>
                        <button type="button" className="btn btn-md btn-block btn-danger" onClick={this.handleDeleteQuestion(question.id)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(myQuiz);
