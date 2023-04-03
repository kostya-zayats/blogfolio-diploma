import React from 'react';
import FormContainer from "../../Components/FormContainer/FormContainer";
import Input from "../../Components/Input";
import Button, {ButtonTypes} from "../../Components/Button";
import styles from "./SignUp.module.scss";

const SignUp = () => {

  return (
    <FormContainer title={'Sign Up'}>
      <>
        <div className={styles['registration-unit']}>
          <Input type={'text'} title={'Name'} placeholder={'Your name'} />
        </div>
        <div className={styles['registration-unit']}>
          <Input type={'text'} title={'Email'} placeholder={'Your email'} />
        </div>
        <div className={styles['registration-unit']}>
          <Input type={'password'} title={'Password'} placeholder={'Your pasword'} />
        </div>
        <div className={styles['registration-unit']}>
          <Input type={'password'} title={'Confirm password'} placeholder={'Confirm password'} />
        </div>
        <div className={styles['registration-unit']}>
          <Button title={'Sign In'} type={ButtonTypes.Primary} />
        </div>
        <div className={styles['registration-unit-auth']}>
          {'Already have an account?'} <span>{'Sign In'}</span>
        </div>
      </>
    </FormContainer>
  );
};

export default SignUp;