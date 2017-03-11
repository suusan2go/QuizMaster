import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

export default class Quizzes extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Quizes | QuizMaster"
          description="QuizMaster quizez"
          meta={[
            { charset: 'utf-8' },
          ]}
        />
        <div className="container">
          <div className="page-header">
            <h1 className="h1-responsive d-inline-block">
              Quizez
            </h1>
            <Link to="/quizzes/new" className="btn btn-primary float-right">
              Create Your New Quiz !
            </Link>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="media">
                <img className="d-flex mr-3" src="..." alt="Generic placeholder image" />
                <div className="media-body">
                  <h5 className="mt-0">Media heading</h5>
                  hogegegegeg
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="media">
                <img className="d-flex mr-3" src="..." alt="Generic placeholder image" />
                <div className="media-body">
                  <h5 className="mt-0">Media heading</h5>
                  hogegegegeg
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
