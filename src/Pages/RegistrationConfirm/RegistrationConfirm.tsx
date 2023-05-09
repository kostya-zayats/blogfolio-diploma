import React from 'react';
import FormContainer from "../../Components/FormContainer/FormContainer";
import styles from "./RegistrationConfirm.module.scss";
import {useLocation, useNavigate} from "react-router-dom";
import Button, {ButtonTypes} from "../../Components/Button/Button";
import {PageNames} from "../../Constants/@types";

const RegistrationConfirm = () => {
  const {state} = useLocation();
  const navigate = useNavigate();

  return (
    <FormContainer title={'Registration Confirmation'}>
      <>
        <div>
          <div className={styles['registration-confirm-text']}>
            Please activate your account with the activation
            link in the email <span>{state?.email || ''}</span>.
          </div>
          <div className={styles['registration-confirm-text']}>
            Please, check your email.
          </div>
          <div className={styles['registration-unit']}>
            <Button
              title={'Go to home'}
              type={ButtonTypes.Primary}
              onClick={() => {navigate(PageNames.Home)}}
            />
          </div>
        </div>
      </>
    </FormContainer>
  );
};

export default RegistrationConfirm;