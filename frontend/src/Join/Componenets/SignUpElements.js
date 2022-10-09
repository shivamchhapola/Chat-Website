import React, { useState } from 'react';
import Styles from './../styles.module.css';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

export default function LoginElements({ className, data, setData }) {
  const [showPass, setShowPass] = useState(false);
  const onDataChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className={className}>
      <div className={Styles.InputField}>
        <input
          name="name"
          className={Styles.InputFieldText}
          value={data ? data['name'] : ''}
          placeholder="Name"
          onChange={(e) => onDataChange(e)}
        />
      </div>
      <div className={Styles.InputField}>
        <input
          name="email"
          className={Styles.InputFieldText}
          value={data ? data['email'] : ''}
          placeholder="Email"
          onChange={(e) => onDataChange(e)}
        />
      </div>
      <div className={Styles.InputField}>
        <input
          name="password"
          className={Styles.InputFieldText}
          value={data ? data['password'] : ''}
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
          value={data ? data['confirmPassword'] : ''}
          placeholder="Confirm Password"
          type={showPass ? 'text' : 'password'}
          onChange={(e) => onDataChange(e)}
        />
      </div>
    </div>
  );
}
