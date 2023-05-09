import React, {useEffect, useRef, useState} from 'react';
import FormContainer from "../../Components/FormContainer/FormContainer";
import Input from "../../Components/Input";
import Button, {ButtonTypes} from "../../Components/Button";
import styles from "./SignUp.module.scss";
import {NavLink, useNavigate} from "react-router-dom";
import {PageNames} from "../../Constants/@types";
import {useDispatch} from "react-redux";
import { registerUser } from "../../Redux/Reducers/authReducer";

const SignUp = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignUp = () => {
    dispatch(
      registerUser({
        data: {username, password, email},
        callback: () =>
          navigate(PageNames.RegistrationConfirm, {
            state: {email}
          }),
      })
    );
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <FormContainer title={'Sign Up'}>
      <>
        <div className={styles['registration-unit']}>
          <Input
            value={username}
            onChange={(value: string) => setUserName(value)}
            ref={inputRef}
            type={'text'}
            title={'Name'}
            placeholder={'Your name'} />
        </div>
        <div className={styles['registration-unit']}>
          <Input
            value={email}
            onChange={(value: string) => setEmail(value)}
            type={'text'}
            title={'Email'}
            placeholder={'Your email'} />
        </div>
        <div className={styles['registration-unit']}>
          <Input
            value={password}
            onChange={(value: string) => setPassword(value)}
            type={'password'}
            title={'Password'}
            placeholder={'Your pasword'} />
        </div>
        <div className={styles['registration-unit']}>
          <Input
            value={passwordConfirm}
            onChange={(value: string) => setPasswordConfirm(value)}
            type={'password'}
            title={'Confirm password'}
            placeholder={'Confirm password'} />
        </div>
        <div className={styles['registration-unit']}>
          <Button
            title={'Sign Up'}
            type={ButtonTypes.Primary}
            onClick={onSignUp} />
        </div>
        <div className={styles['registration-unit-auth']}>
          {'Already have an account?'} <NavLink to={PageNames.SignIn}>{'Sign In'}</NavLink>
        </div>
      </>
    </FormContainer>
  );
};

export default SignUp;