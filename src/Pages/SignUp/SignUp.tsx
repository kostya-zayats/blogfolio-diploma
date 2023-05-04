import React, {useEffect, useRef, useState} from 'react';
import FormContainer from "../../Components/FormContainer/FormContainer";
import Input from "../../Components/Input";
import Button, {ButtonTypes} from "../../Components/Button";
import styles from "./SignUp.module.scss";
import {NavLink} from "react-router-dom";
import {PageNames} from "../../Constants/@types";

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

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
            value={name}
            onChange={(value: string) => setName(value)}
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
          <Button title={'Sign In'} type={ButtonTypes.Primary} />
        </div>
        <div className={styles['registration-unit-auth']}>
          {'Already have an account?'} <NavLink to={PageNames.SignIn}>{'Sign In'}</NavLink>
        </div>
      </>
    </FormContainer>
  );
};

export default SignUp;