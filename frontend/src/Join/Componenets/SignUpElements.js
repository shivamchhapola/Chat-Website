import React, { useState } from 'react';
import Styles from './../styles.module.css';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

export default function LoginElements({ className, onDataChange }) {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className={className}>
      <div className={Styles.InputField}>
        <input
          name="name"
          className={Styles.InputFieldText}
          placeholder="Name"
          onChange={(e) => onDataChange(e)}
        />
      </div>
      <div className={Styles.InputField}>
        <input
          name="email"
          className={Styles.InputFieldText}
          placeholder="Email"
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
      <div className={Styles.InputField}>
        <input
          name="confirmPassword"
          className={Styles.InputFieldText}
          placeholder="Confirm Password"
          type={showPass ? 'text' : 'password'}
          onChange={(e) => onDataChange(e)}
        />
      </div>
    </div>
  );
}
