import React, {useEffect, useRef, useState} from 'react';
import FormContainer from "../../Components/FormContainer/FormContainer";
import Input from "../../Components/Input";
import Button, {ButtonTypes} from "../../Components/Button";
import styles from "./SignIn.module.scss";
import {NavLink, useNavigate} from "react-router-dom";
import {PageNames} from "../../Constants/@types";
import {signInUser} from '../../Redux/Reducers/authReducer';
import {useDispatch} from "react-redux";

const SignIn = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onSignIn = () => {
    dispatch(
      signInUser({
        data: {email: login, password},
        callback: () => navigate(PageNames.Home)
      })
    );
  };

  return (
    <FormContainer title={'Sign In'}>
      <>
        <div className={styles['registration-unit']}>
          <Input
            value={login}
            onChange={(value: string) => setLogin(value)}
            ref={inputRef}
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
        <div className={styles['forgot-password']}>Forgot password?</div>
        <div className={styles['registration-unit']}>
          <Button
            title={'Sign In'}
            type={ButtonTypes.Primary}
            onClick={onSignIn} />
        </div>
        <div className={styles['registration-unit-auth']}>
          {'Don’t have an account?'} <NavLink to={PageNames.SignUp}>{'Sign Up'}</NavLink>
        </div>
      </>
    </FormContainer>
  );
};

export default SignIn;