import React from 'react';
import Helmet from 'react-helmet';
import style from './style.modules.scss';

export default class Top extends React.Component {
  render() {
    return (
      <div className={`jumbotron text-center  blue-grey lighten-5 ${style.jumbotronBackground}`}>
        <Helmet
          title="QuizMaster"
          description="QuizMaster"
          meta={[
            { charset: 'utf-8' },
          ]}
        />
        <h1 className="display-3">QuizMaster</h1>
        <p className="lead">QuizMaster is a simple quiz based learning platform</p>
        <hr className="my-4" />
        <p>Create and Enjoy Quize</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg btn-default" href="/auth/google" role="button"><i className="fa fa-google" aria-hidden="true" /> Sign In With Google</a>
        </p>
      </div>
    );
  }
}
