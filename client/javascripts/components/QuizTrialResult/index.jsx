import React from 'react';
import Helmet from 'react-helmet';
import Chart from 'chart.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as quizTrialActions from 'actions/quizTrialActionCreators';
import { asyncLoader } from 'redux-async-loader';

type Props = {
  quizTrialResult: {
    id: number,
    answered_questions_count: number,
    correct_answers_count: number,
  },
}

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(quizTrialActions, dispatch) }
);

const mapStateToProps = (state, ownProps) => ({
  quizTrialResult: state.quizTrialResult,
  ownProps,
});

class QuizTrialResult extends React.Component {
  componentDidMount() {
    const correctAnswersCount = this.props.quizTrialResult.correct_answers_count;
    const answeredQuestionsCount = this.props.quizTrialResult.answered_questions_count;
    this.chart = new Chart(this.chartCanvas, {
      type: 'pie',
      data: {
        labels: [
          'Correct Answers',
          'Wrong Answers',
        ],
        datasets: [
          {
            data: [
              correctAnswersCount,
              answeredQuestionsCount - correctAnswersCount,
            ],
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
            ],
          },
        ],
      },
      option: {
        responsive: true,
      },
    });
  }

  componentWillUnMount() {
    this.chart.destory();
  }

  props: Props

  render() {
    return (
      <div>
        <Helmet
          title="Quiz Trial Result | QuizMaster"
          description="QuizMaster quizez"
          meta={[
            { charset: 'utf-8' },
          ]}
        />
        <div className="container">
          <div className="page-header">
            <h1 className="h1-responsive">Quiz Result</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-4 align-self-center">
              <canvas ref={(c) => { this.chartCanvas = c; }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default asyncLoader(
  (props, store) => store.dispatch(quizTrialActions.getQuizTrialResult(props.params.id)),
)(connect(mapStateToProps, mapDispatchToProps)(QuizTrialResult));
