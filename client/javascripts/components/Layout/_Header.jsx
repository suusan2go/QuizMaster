import React from 'react';
import { Link } from 'react-router';

type Props = {
  currentUser: { name: string, avatar_url: string },
  actions: { requestSignOut: Action }
}

const Header = (props: Props) => {
  const currentUser = { avatar_url: 'goge' };
  const requestSignOut = null;
  // const { actions: { requestSignOut } } = props;
  return (
    <nav className="navbar navbar-toggleable-md navbar-dark default-color">
      <div className="container">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="/">
          <strong>QuizMaster</strong>
        </a>
        <div className="collapse navbar-collapse" id="navbarNav3">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link waves-effect waves-light"><i className="fa fa-envelope" /> Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light"><i className="fa fa-gear" /> Settings</a>
            </li>
            <li className="nav-item dropdown btn-group">
              <a className="nav-link dropdown-toggle waves-effect waves-light" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user" /> Profile</a>
              <div className="dropdown-menu dropdown-default dropdown-menu-left" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item waves-effect waves-light" href="#">Action</a>
                <a className="dropdown-item waves-effect waves-light" href="#">Another action</a>
                <a className="dropdown-item waves-effect waves-light" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
