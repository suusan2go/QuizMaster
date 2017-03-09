import React from 'react';
import Helmet from 'react-helmet';

export default class Sample extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="QuizMaster"
          meta={[
            { charset: 'utf-8' },
          ]}
        />
        sample
      </div>
    );
  }
}
