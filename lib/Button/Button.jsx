import React from 'react';

import styles from './Button.module.css';

export default function (props) {
  const btnClassNames = `${props.className || ''} ${styles['Button'] || ''}`;
  const btnTextClassNames = `${styles['Button-text']}`;

  return (
    <button
      className={btnClassNames}
      disabled={props.isDisabled}
    >
      <div className={btnTextClassNames}>
        {props.children}
      </div>
    </button>
  )
}
