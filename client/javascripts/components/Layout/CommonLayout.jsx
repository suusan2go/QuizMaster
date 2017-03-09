import React from 'react';
import Header from './common/Header';

type Props = {
  children: React.element<*>
};

export default class CommonLayout extends React.Component {
  props: Props
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <footer className="page-footer default-color-dark center-on-small-only">
          <div className="footer-copyright">
            <div className="container-fluid">
            © 2017 Copyright: suzan2go
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
