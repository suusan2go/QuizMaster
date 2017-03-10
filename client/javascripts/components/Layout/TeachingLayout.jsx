import React from 'react';

export default function TeacherLayout(props: { children: React.element<*> }) {
  return (
    <div>
      studentLayout
      {props.children}
    </div>
  );
}
