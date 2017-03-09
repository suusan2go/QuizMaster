import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CommonLayout from 'components/Layout/CommonLayout';
// import TeacherLayout from 'components/Layout/TeacherLayout';
// import StudentLayout from 'components/Layout/StudentLayout';
import Sample from 'components/Sample';

export default (
  <Route path="/">
    <Route component={CommonLayout} >
      <IndexRoute component={Sample} />
    </Route>
    {
      /*
      <Route component={StudentLayout} path="learn" >
      <IndexRoute component={<p>Student</p>} />
      </Route>
      <Route component={TeacherLayout} path="teach" >
      <IndexRoute component={<p>Teacher</p>} />
      </Route>
      */
    }
  </Route>
);
