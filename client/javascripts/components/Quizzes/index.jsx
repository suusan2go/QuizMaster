import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as quizzesActions from 'actions/quizzesActionCreators';

const mapDispatchToProps = dispatch => (
  {
    actions: {
      ...bindActionCreators(quizzesActions, dispatch),
    },
  }
);

const mapStateToProps = (state, ownProps) => ({
  quizzes: state.quizzes,
  ownProps,
});

type Props = {
  actions: { getQuizzes: action },
  quizzes: Array<{ title: string, descriptn: string, id: string }>
}

class Quizzes extends React.Component {
  componentWillMount() {
    this.props.actions.getQuizzes();
  }

  props: Props

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
            <Link to="/quizzes/new" className="btn btn-md btn-primary float-right">
              Create Your New Quiz !
            </Link>
          </div>
          <div className="row no-gutters ">
            {
              this.props.quizzes.map(quiz => (
                <div className="col-sm-6">
                  <Link to="hoge" className="border list-group-item list-group-item-action">
                    <div className="media">
                      <img className="rounded-circle d-flex mr-3" alt={quiz.title} src={quiz.image_url} />
                      <div className="media-body">
                        <h5 className="mt-0">{quiz.title}</h5>
                        {quiz.description}
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quizzes);
