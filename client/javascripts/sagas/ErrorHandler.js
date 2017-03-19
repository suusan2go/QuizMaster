import {
  addWarningFlashMessage,
} from 'actions/flashMessagesActionCreators';
import { browserHistory } from 'react-router';
import { put } from 'redux-saga/effects';

export default class ErrorHandler {
  constructor(error) {
    this.error = error;
    this.response = error.response;
  }

  handleRequestError() {
    switch (this.response.status) {
      case 404:
        browserHistory.goBack();
        return put(addWarningFlashMessage('404 Not Found'));
      case 401:
        setTimeout(() => { window.location.href = '/'; }, 2000);
        return put(addWarningFlashMessage('Please Sign In'));
      default:
        return put(addWarningFlashMessage('Sorry, something went wrong'));
    }
  }

  // TODO: Reporting to Issue Tracking System
  notifyError() {
    console.log(this.error); // eslint-disable-line
  }

  handleRunTimeError() {
    // logging or reporting issues
    this.notifyError();
    return put(addWarningFlashMessage('Sorry, something went wrong'));
  }

  handleError() {
    if (this.response) return this.handleRequestError();
    return this.handleRuntimeError();
  }
}
