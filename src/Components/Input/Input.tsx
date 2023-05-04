import React, {ChangeEvent, forwardRef} from 'react';
import classnames from "classnames";

import styles from './Input.module.scss';

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  type: string;
  placeholder?: string;
  unicClass?: string;
  title?: string;
  error?: string;
  onFocus?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({value, onChange, type, placeholder, title, error, unicClass}, ref) => {

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles['input-wrap']}>
      {title && <div className={styles['input-label']}>{title}</div>}
      <input
        value={value}
        onChange={onChangeInput}
        type={type}
        placeholder={placeholder}
        ref={ref}
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
});

export default Input;