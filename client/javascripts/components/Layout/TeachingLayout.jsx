import React from 'react';
import Header from './teaching/Header';
import styles from './teaching/sidebar.modules.scss';

export default function TeacherLayout(props: { children: React.element<*> }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={`card ${styles.sidebar}`}>
        <a href="#" className={`${styles.sidebar_nav} ${styles.sidebar_nav_active}`}>
          <div className="lead">
            <i className="fa fa-book" aria-hidden="true" /> Quizes
          </div>
        </a>
        <a href="#" className={`${styles.sidebar_nav}`}>
          <div className="lead">
            <i className="fa fa-user" aria-hidden="true" /> Students
          </div>
        </a>
      </div>
      <div className={`container-flud ${styles.main}`}>
        <div className="row no-gutters">
          <div className="col-sm-12">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
