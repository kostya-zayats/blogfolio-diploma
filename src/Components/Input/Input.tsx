import React, {FC} from 'react';
import classnames from "classnames";

import styles from './Input.module.scss';
import {placeholder} from "@babel/types";

type InputProps = {
  type: string;
  placeholder?: string;
  unicClass?: string;
}

const Input: FC<InputProps> = ({type, placeholder, unicClass}) => {

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classnames(unicClass, styles['input'])}
    />
  );
};

export default Input;