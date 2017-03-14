import React from 'react';
import Header from './Header';
import FlashMessages from '../FlashMessages';

type Props = {
  children: React.element<*>
};

export default class CommonLayout extends React.Component {
  props: Props
  render() {
    return (
      <div>
        <Header />
        <FlashMessages />
        <div className="wrapper">
          {this.props.children}
        </div>
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
