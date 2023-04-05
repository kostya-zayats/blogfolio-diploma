import React, {useEffect, useRef} from 'react';
import FormContainer from "../../Components/FormContainer/FormContainer";
import Input from "../../Components/Input";
import Button, {ButtonTypes} from "../../Components/Button";
import styles from "./SignIn.module.scss";
import {NavLink} from "react-router-dom";
import {PageNames} from "../../Constants/@types";

const SignIn = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <FormContainer title={'Sign In'}>
      <>
        <div className={styles['registration-unit']}>
          <Input ref={inputRef} type={'text'} title={'Email'} placeholder={'Your email'} />
        </div>
        <div className={styles['registration-unit']}>
          <Input type={'password'} title={'Password'} placeholder={'Your pasword'} />
        </div>
        <div className={styles['forgot-password']}>Forgot password?</div>
        <div className={styles['registration-unit']}>
          <Button title={'Sign In'} type={ButtonTypes.Primary} />
        </div>
        <div className={styles['registration-unit-auth']}>
          {'Don’t have an account?'} <NavLink to={PageNames.SignUp}>{'Sign Up'}</NavLink>
        </div>
      </>
    </FormContainer>
  );
};

export default SignIn;