import React, {FC} from 'react';
import classnames from "classnames";

import styles from './Input.module.scss';

type InputProps = {
  type: string;
  placeholder?: string;
  unicClass?: string;
  title?: string;
  error?: string;
}

const Input: FC<InputProps> = ({type, placeholder, title, error, unicClass}) => {

  return (
    <div className={styles['input-wrap']}>
      {title && <div className={styles['input-label']}>{title}</div>}
      <input
        type={type}
        placeholder={placeholder}
        className={
          classnames(
            unicClass,
            styles['input'],
            {[styles.error]: !!error})
        }
      />
      {error && <div className={styles['input-error-msg']}>{error}</div>}
    </div>
  );
};

export default Input;