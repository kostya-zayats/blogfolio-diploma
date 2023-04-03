import React from 'react';
import FormContainer from "../../Components/FormContainer/FormContainer";
import Input from "../../Components/Input";
import Button, {ButtonTypes} from "../../Components/Button";
import styles from "./SignIn.module.scss";

const SignIn = () => {

  return (
    <FormContainer title={'Sign In'}>
      <>
        <div className={styles['registration-unit']}>
          <Input type={'text'} title={'Email'} placeholder={'Your email'} />
        </div>
        <div className={styles['registration-unit']}>
          <Input type={'password'} title={'Password'} error={'eqweq'} placeholder={'Your pasword'} />
        </div>
        <div className={styles['registration-unit']}>
          <Button title={'Sign In'} type={ButtonTypes.Primary} />
        </div>
      </>
    </FormContainer>
  );
};

export default SignIn;