import React from 'react';
import FormContainer from "../../Components/FormContainer/FormContainer";
import styles from "./RegistrationSuccess.module.scss";
import {useNavigate, useParams} from "react-router-dom";
import Button, {ButtonTypes} from "../../Components/Button/Button";
import {PageNames} from "../../Constants/@types";
import {useDispatch} from "react-redux";
import {activateUser} from '../../Redux/Reducers/authReducer';

const RegistrationSuccess = () => {
  const navigate = useNavigate();
  const {uid, token} = useParams();

  const dispatch = useDispatch();
  const onConfirm = () => {
    if(uid && token) {
      dispatch(
        activateUser({
          data: {uid, token},
          callback: () => {
            navigate(PageNames.SignIn)
          },
        })
      );
    }
  };

  return (
    <FormContainer title={'Registration Success'}>
      <>
        <div>
          <div className={styles['registration-confirm-text']}>
            You need to confirm your email.
          </div>
          <div className={styles['registration-confirm-text']}>
            Click button below
          </div>
          <div className={styles['registration-unit']}>
            <Button
              title={'Confirm'}
              type={ButtonTypes.Primary}
              onClick={onConfirm}
            />
          </div>
        </div>
      </>
    </FormContainer>
  );
};

export default RegistrationSuccess;