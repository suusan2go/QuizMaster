import React from 'react';
import Helmet from 'react-helmet';
import style from './style.modules.scss';

export default class Top extends React.Component {
  render() {
    return (
      <div className={`jumbotron view jumbotron-top text-center  blue-grey lighten-5 ${style.jumbotron_background}`}>
        <Helmet
          title="QuizMaster"
          description="QuizMaster"
          meta={[
            { charset: 'utf-8' },
          ]}
        />
        <div className="mask pattern-3 pt-4">
          <h1 className="display-3 text-white">QuizMaster</h1>
          <p className="lead text-white">QuizMaster is a simple quiz based learning platform</p>
          <hr className="my-4" />
          <p className="text-white">Create and Enjoy Quize</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg btn-default" href="/auth/google" role="button">
              <i className="fa fa-google" aria-hidden="true" /> Sign In With Google
            </a>
          </p>
        </div>
      </div>
    );
  }
}
