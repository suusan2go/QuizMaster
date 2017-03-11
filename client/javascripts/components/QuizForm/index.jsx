import React from 'react';
import Modal from 'react-modal';
import { browserHistory } from 'react-router';
import Helmet from 'react-helmet';

export default class QuizForm extends React.Component {
  static closeModal() {
    browserHistory.goBack();
  }

  render() {
    return (
      <div>
        <Helmet
          title="New Quize Form | QuizMaster"
          description="QuizMaster quizez"
          meta={[
            { charset: 'utf-8' },
          ]}
        />
        <Modal
          isOpen
          onAfterOpen={this.afterOpenModal}
          onRequestClose={QuizForm.closeModal}
          className="modal-open"
          overlayClassName="modal_overlay"
          contentLabel="Quiz Form Modal"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">New Quiz</h5>
                <button type="button" className="close" onClick={QuizForm.closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="md-form">
                  <input placeholder="English Quiz 10 set" type="text" id="form5" className="form-control" />
                  <label htmlFor="form5" className="active">Quiz Title</label>
                </div>
                <div className="md-form">
                  <textarea placeholder="This is easy english quiz...." type="text" id="form5" className="md-textarea form-control" rows="10" />
                  <label htmlFor="form5" className="active">Quiz Description</label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Start Creation</button>
                <button type="button" className="btn btn-secondary" onClick={QuizForm.closeModal}>Close</button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
