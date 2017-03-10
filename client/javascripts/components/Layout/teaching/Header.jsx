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
    <nav className="navbar navbar-toggleable-md navbar-dark info-color">
      <div className="container">
        <a className="navbar-brand" href="/">
          <strong>QuizMaster<i className="fa fa-question" aria-hidden="true" /></strong>
        </a>
      </div>
    </nav>
  );
};

export default Header;
