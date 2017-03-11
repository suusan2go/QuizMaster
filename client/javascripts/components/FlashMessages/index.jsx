import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as flashMessagesActions from 'actions/flashMessagesActionCreators';
import style from './style.modules.scss';
import Flash from './Flash';

type Props = {
  flashMessages: Array<{ type: string, message: string }>,
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
