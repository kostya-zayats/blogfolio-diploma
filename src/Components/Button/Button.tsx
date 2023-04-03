import React, { FC } from 'react';
import classnames from 'classnames';

import styles from './Button.module.scss';

export enum ButtonTypes {
  Primary = 'primary',
  Secondary = 'secondary',
  Warning = 'warning'
}

type ButtonProps = {
  title: string;
  type: ButtonTypes;
  unicClass?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({type, title, unicClass, disabled, onClick}) => {
  const buttonClassName = styles[type];

  return (
    <button
      className={classnames(
        styles.button,
        buttonClassName,
        unicClass,
        {[styles.disabled]: !!disabled}
      )}
      onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;