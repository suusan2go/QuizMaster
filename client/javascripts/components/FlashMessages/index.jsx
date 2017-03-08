import React from 'react';
import style from './style.module.scss';
import Flash from './Flash';
import FlashMessages from 'components/FlashMessages';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as flashMessagesActions from 'actions/flashMessagesActionCreators';

type Props = {
  flashMessages: Array{
    type: string
    message: string
  },
  removeFlashMessage: action,
}

class FlashMessages extends React.Component {
  props: Props
  render() {
    const { flashMessages, removeFlashMessage } = this.props;
    return (
      <div className={style.flash_container}>
        {
          flashMessages.map(f => (
            <Flash
              key={f.id}
              removeFlashMessage={removeFlashMessage}
              {...f}
            />
          ))
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  { ...bindActionCreators(flashMessagesActions, dispatch) }
);

const mapStateToProps = (state, ownProps) => ({
  flashMessages: state.flashMessages,
  ownProps,
});

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessages);
