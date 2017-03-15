import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as authActions from 'actions/authActionCreators';

type Props = {
  currentUser: { name: string, avatar_url: string },
  actions: { requestSignOut: Action }
}

const Header = (props: Props) => {
  const currentUser = props.currentUser;
  // const { actions: { requestSignOut } } = props;
  return (
    <nav className="navbar navbar-toggleable-md navbar-dark default-color">
      <div className="container">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <Link className="navbar-brand" to="/">
          <strong>QuizMaster</strong>
        </Link>
        {
          currentUser &&
          <div className="collapse navbar-collapse" id="navbarNav3">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link waves-effect waves-light" to="/users/quizzes">
                  <i className="fa fa-question" /> ManageQuizzes
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link waves-effect waves-light"><i className="fa fa-gear" /> SignOut</a>
              </li>
            </ul>
          </div>
        }
      </div>
    </nav>
  );
};

const mapDispatchToProps = dispatch => (
  {}
  // { actions: bindActionCreators(authActions, dispatch) }
);

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.currentUser,
  ownProps,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
