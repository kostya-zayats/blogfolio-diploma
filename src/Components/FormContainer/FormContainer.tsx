import React, {FC, ReactElement} from 'react';

import styles from './FormContainer.module.scss'
import Header from "../Header";

type FormContainerProps = {
  title: string;
  children: ReactElement;
}

const FormContainer: FC<FormContainerProps> = ({title, children}) => {

  return (
    <div className={styles['registration-container']}>
      <div className={styles['home-link']}><span>{'Back to home'}</span></div>
      <Header title={title} />
      <div className={styles.registration}>
        {children}
      </div>
    </div>
  );
};

export default FormContainer;