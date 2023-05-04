import React, {FC, ReactElement} from 'react';
import classnames from 'classnames';

import styles from './Button.module.scss';

export enum ButtonTypes {
  Primary = 'primary',
  Secondary = 'secondary',
  Warning = 'warning'
}

type ButtonProps = {
  title: string | ReactElement;
  type: ButtonTypes;
  unicClass?: string;
  disabled?: boolean;
  onClick?: () => void;
  onDefaultClick: () => void;
}

export const withDefaultOnClick = (Component: any) => {
  return (props: any) => <Component {...props} onDefaultClick={() => console.log('Button error')}  />
};

const Button: FC<ButtonProps> = (props) => {
  const { type, title, onClick, unicClass, disabled, onDefaultClick } = props;

  const buttonClassName = styles[type];

  return (
    <button
      className={classnames(
        styles.button,
        buttonClassName,
        unicClass,
        {[styles.disabled]: !!disabled}
      )}
      onClick={onClick ? onClick : onDefaultClick}>
      {title}
    </button>
  );
};

export default withDefaultOnClick(Button);