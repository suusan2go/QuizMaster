import React from 'react';

type Props = {
  children: React.element<*>
};

export default class CommonLayout extends React.Component {
  props: Props
  render() {
    return (
      <div>
          CommonLayout
          {this.props.children}
      </div>
    );
  }
}
