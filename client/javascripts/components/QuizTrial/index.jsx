import React from 'react';
import Helmet from 'react-helmet';

export default class Top extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Quiz Trial! | QuizMaster"
          description="QuizMaster quiz trial"
          meta={[
            { charset: 'utf-8' },
          ]}
        />
        <div className="container">
          <div className="page-header">
            <h1 className="h1-responsive">Quiz Trial</h1>
          </div>
          <div className="progress mb-1">
            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" />
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-block">
                  <p>elibaegagaegagefagagearaegaegabaega  gagaera gagaeag</p>
                  <form className="form-inline float-right">
                    <div className="md-form form-group">
                      <input type="text" id="answer" className="form-control" placeholder="Type Your Answer" />
                      <label htmlFor="answer" className="active">Answer.</label>
                    </div>
                    <div className="md-form form-group">
                      <a href="" className="btn btn-primary btn-lg">Submit</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
