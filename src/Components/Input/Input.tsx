import React, {FC} from 'react';
import classnames from "classnames";

import styles from './Input.module.scss';

type InputProps = {
  inputType: string;
  unicClass?: string;
}

const Input: FC<InputProps> = ({inputType, unicClass}) => {

  return (
    <input
      type={inputType}
      className={classnames(unicClass, styles['input'])}
    />
  );
};

export default Input;