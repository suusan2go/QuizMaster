import React from 'react';
import style from './style.modules.scss';

type Props = {
  id: string,
  type: string,
  messages: string,
  removeFlashMessage: action,
};

const autoCloseSeconds = 10;
const transitionSeconds = 0.3;
export default class Flash extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickClose = this.handleClickClose.bind(this);
    this.state = { styles: { } };
  }

  props: Props

  componentDidMount() {
    setTimeout(() => this.handleClickClose, autoCloseSeconds * 1000);
  }

  handleClickClose() {
    this.setState({ styles: { opacity: 0.01 } });
    setTimeout(() => this.props.removeFlashMessage(this.props.id), transitionSeconds * 1000);
  }

  render() {
    const { type, messages } = this.props;
    return (
      <div className={`alert alert-dismissible alert-${type} ${style.flash}`} style={this.state.styles}>
        <button type="button" className="close" onClick={this.handleClickClose}>×</button>
        {messages}
      </div>
    );
  }
}
