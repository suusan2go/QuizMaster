import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as myQuizzesActions from 'actions/myQuizzesActionCreators';

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(myQuizzesActions, dispatch) }
);

const mapStateToProps = (state, ownProps) => ({
  myQuizzes: state.myQuizzes,
  ownProps,
});

type Props = {
  actions: { fetchMyQuizzes: action },
  myQuizzes: Array<{ title: string, descriptn: string, id: string }>
}

class MyQuizzes extends React.Component {
  componentDidMount() {
    this.props.actions.fetchMyQuizzes();
  }

  props: Props

  render() {
    console.log(this.props);
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
            <Link to="/quizzes/new" className="btn btn-primary float-right">
              Create Your New Quiz !
            </Link>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.myQuizzes.map(quiz => (
                  <tr key={quiz.id}>
                    <th scope="row">{quiz.id}</th>
                    <td>{quiz.title}</td>
                    <td>
                      <a className="teal-text mr-3"><i className="fa fa-pencil" /></a>
                      <a className="red-text"><i className="fa fa-times" /></a>
                    </td>
                  </tr>

                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyQuizzes);
