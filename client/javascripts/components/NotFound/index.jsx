import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

const NotFound = () => (
  <div className="jumbotron text-center jumbotron-top">
    <Helmet
      title="404 Not Found"
      meta={[
            { charset: 'utf-8' },
      ]}
    />
    <h1 className="display-3">404 Not Found</h1>
    <hr className="my-4" />
    <p className="lead">
      <Link className="btn btn-primary btn-lg btn-default" to="/">Back To Top</Link>
    </p>
  </div>
);

export default NotFound;
