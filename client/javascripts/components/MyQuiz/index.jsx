import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as myQuizActions from 'actions/myQuizActionCreators';

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(myQuizActions, dispatch) }
);

const mapStateToProps = (state, ownProps) => ({
  myQuiz: state.myQuiz,
  ownProps,
});

type Props = {
  actions: { fetchmyQuiz: action },
  myQuiz: Array<{ title: string, descriptn: string, id: string }>
}

class myQuiz extends React.Component {
  componentDidMount() {
    this.props.actions.fetchmyQuiz();
  }

  props: Props

  render() {
    return (
      <div>
        <Helmet
          title="MyQuizes | QuizMaster"
          description="QuizMaster My quizez"
          meta={[
            { charset: 'utf-8' },
          ]}
        />
        <div className="container">
          <div className="page-header">
            <h1 className="h1-responsive d-inline-block">
              My Quizez
            </h1>
            <Link to="/quizzes/new" className="btn btn-default float-right">
              EDIT YOUR QUIZ
            </Link>
            <div>
              <p>
                somedescriptions
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-1">
              <Link to="/quizzes/new" className="btn btn-primary float-right">
              ADD QESTION
            </Link>
            </div>
            <div className="col-12">
              <div className="list-group">
                <div href="#" className="list-group-item list-group-item-action align-items-start">
                  <div className="col-sm-10 justify-content-between">
                    <h3 className="mr-auto">Question</h3>
                    <p>hogehogehogehahahgaga</p>
                    <h3 className="mr-auto">Answer</h3>
                    <p>hogehogehogehahahgaga</p>
                  </div>
                  <div className="col-sm-2">
                    <Link className="btn btn-md btn-block btn-default">Edit</Link>
                    <Link className="btn btn-md btn-block btn-danger">Delete</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(myQuiz);
