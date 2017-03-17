import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'actions/authActionCreators';

type Props = {
  currentUser: { name: string, avatar_url: string },
  actions: { logOut: Action }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };

    this.handleClickButton = this.handleClickButton.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleClickButton() {
    this.setState({ open: !this.state.open });
  }

  closeMenu() {
    this.setState({ open: false });
  }

  props: Props

  render() {
  // const { actions: { requestSignOut } } = props;
    const currentUser = this.props.currentUser;
    return (
      <nav className="navbar navbar-toggleable-md navbar-dark default-color">
        <div className="container">
          {
          currentUser &&
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation"
              onClick={this.handleClickButton}
            >
              <span className="navbar-toggler-icon" />
            </button>
          }
          <Link className="navbar-brand" to="/" onClick={this.closeMenu} >
            <strong>QuizMaster</strong>
          </Link>
          {
          currentUser &&
          <div className={`collapse navbar-collapse ${this.state.open && 'show'}`}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link waves-effect waves-light" to="/users/quizzes" onClick={this.closeMenu}>
                  <i className="fa fa-question" /> ManageQuizzes
                </Link>
              </li>
              <li className="nav-item" onClick={this.props.actions.logOut}>
                <a className="nav-link waves-effect waves-light">
                  <i className="fa fa-gear" /> LogOut
                </a>
              </li>
            </ul>
          </div>
        }
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(authActions, dispatch) }
);

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.currentUser,
  ownProps,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
