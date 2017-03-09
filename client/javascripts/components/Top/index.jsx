import React from 'react';
import Helmet from 'react-helmet';
import style from './style.modules.scss';
import StudentImage from './student.png';
import TeacherImage from './teacher.png';

export default class Top extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="QuizMaster"
          description="QuizMaster"
          meta={[
            { charset: 'utf-8' },
          ]}
        />
        <div className={`jumbotron text-center  blue-grey lighten-5 ${style.jumbotronBackground}`}>
          <h1 className="display-3">QuizMaster</h1>
          <p className="lead">QuizMaster is a simple quiz based learning platform</p>
          <hr className="my-4" />
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-sm-5">
                <div className="card">
                  <img className="img-fluid" src={StudentImage} alt="student image" />
                  <div className="card-block">
                    <p className="lead text-center">
                      <a className="btn btn-default btn-lg" href="#" role="button">SignUp as Student</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="card">
                  <img className="img-fluid" src={TeacherImage} alt="teacher image" />
                  <div className="card-block">
                    <p className="lead text-center">
                      <a className="btn btn-secondary btn-lg" href="#" role="button">SignUp as Teacher</a>
                    </p>
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
