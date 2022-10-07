import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import Styles from './../styles.module.css';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

export default function LoginElements({ className, onDataChange }) {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className={className}>
      <div className={Styles.InputField}>
        <input
          name="username"
          className={Styles.InputFieldText}
          placeholder="Username"
          onChange={(e) => onDataChange(e)}
        />
      </div>
      <div className={Styles.InputField}>
        <input
          name="password"
          className={Styles.InputFieldText}
          placeholder="Password"
          type={showPass ? 'text' : 'password'}
          onChange={(e) => onDataChange(e)}
        />
        <button
          className={Styles.PassShowBtn}
          onClick={() => setShowPass(!showPass)}>
          {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
        </button>
      </div>
      <button className={Styles.ForgotPass}>Forgot Password?</button>
      <button className={`${Styles.BtnField} ${Styles.GoogleBtn}`}>
        <FcGoogle
          size="1.2rem"
          style={{
            marginRight: '0.2rem',
            marginBottom: '0.1rem',
            verticalAlign: 'middle',
            display: 'initial',
          }}
        />
        Login with Google
      </button>
    </div>
  );
}
