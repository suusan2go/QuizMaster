import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as myQuizzesActions from 'actions/myQuizzesActionCreators';
import * as quizFormActions from 'actions/quizFormActionCreators';

const mapDispatchToProps = dispatch => (
  {
    actions: {
      ...bindActionCreators(myQuizzesActions, dispatch),
      ...bindActionCreators(quizFormActions, dispatch),
    },
  }
);

const mapStateToProps = (state, ownProps) => ({
  myQuizzes: state.myQuizzes,
  ownProps,
});

type Props = {
  actions: { getMyQuizzes: action, deleteQuiz: action },
  myQuizzes: Array<{ title: string, descriptn: string, id: string }>
}

class MyQuizzes extends React.Component {
  componentWillMount() {
    this.props.actions.getMyQuizzes();
  }

  handleDeleteQuiz(quizId: string) {
    return () => {
      this.props.actions.deleteQuiz(quizId);
    };
  }

  props: Props

  render() {
    return (
      <div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active">MyQuizzes</li>
        </ol>
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
              My Quizzes
            </h1>
            <Link to="/quizzes/new" className="btn btn-md btn-primary float-right">
              Create Your New Quiz !
            </Link>
          </div>
          <div className="list-group">
            {
                this.props.myQuizzes.map(quiz => (
                  <div className="list-group-item list-group-item-action flex-column align-items-start" key={quiz.id}>
                    <div className="d-flex w-100 justify-content-between">
                      <h3 className="mr-auto">{quiz.title}</h3>
                      <div className="d-flex justify-content-between">
                        <Link to={`/users/quizzes/${quiz.id}`} className="btn btn-md btn-default">
                          <i className="fa fa-pencil" /> EDit
                        </Link>
                        <button className="btn btn-md btn-danger" onClick={this.handleDeleteQuiz(quiz.id)}>
                          <i className="fa fa-times" />Delete
                        </button>
                      </div>
                    </div>
                    <p>{quiz.description}</p>
                  </div>
                ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyQuizzes);
