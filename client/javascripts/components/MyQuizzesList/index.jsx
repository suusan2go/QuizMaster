import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

export default class MyQuizzesList extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="MyQuizes | QuizMaster"
          description="QuizMaster quizez"
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
              <tr>
                <th scope="row">1</th>
                <td>Abby</td>
                <td>
                  <a className="teal-text mr-3"><i className="fa fa-pencil" /></a>
                  <a className="red-text"><i className="fa fa-times" /></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
