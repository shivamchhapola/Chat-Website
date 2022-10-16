import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { customAlphabet } from 'nanoid';
import LoginElements from './LoginElements';
import SignUpElements from './SignUpElements';
import Styles from './../styles.module.css';
import { RegistrationValidate, LoginValidate } from './../Validation';

const ConVariants = {
  open: {
    width: '65%',
    backgroundColor: '#E2E8F0',
    transition: {
      duration: 0.5,
    },
  },
  close: {
    width: '35%',
    backgroundColor: '#2D3748',
    transition: {
      duration: 0.5,
    },
  },
};

const InputVariants = {
  open: {
    opacity: 1,
    width: '55%',
    transition: {
      duration: 0.5,
    },
    transitionEnd: {
      display: 'block',
    },
  },
  close: {
    opacity: 0,
    width: '70%',
    transition: {
      duration: 0.5,
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

const ErrorVariants = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
    transitionEnd: {
      display: 'block',
    },
  },
  close: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
    transitionEnd: {
      display: 'hidden',
    },
  },
};

const ButtonVariants = {
  open: {
    backgroundColor: '#2D3748',
    color: '#E2E8F0',
    width: '55%',
    transition: {
      duration: 0.5,
    },
  },
  close: {
    backgroundColor: '#E2E8F0',
    color: '#2D3748',
    width: '65%',
    transition: {
      duration: 0.5,
    },
  },
};

export default function DesktopLogin() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginError, setLoginError] = useState('');
  const [registerationError, setRegistrationError] = useState('');
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [signupData, setSignupData] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    email: '',
  });

  const onLogin = () => {
    if (!isLogin) {
      setIsLogin(true);
      setRegistrationError('');
      setSignupData({
        name: '',
        password: '',
        confirmPassword: '',
        email: '',
      });
      return;
    }

    const validate = LoginValidate(loginData);
    setLoginError(validate.error && validate.error.details[0].message);
  };

  const onSignup = () => {
    if (isLogin) {
      setIsLogin(false);
      setLoginError('');
      setLoginData({
        username: '',
        password: '',
      });
      return;
    }

    const validate = RegistrationValidate(signupData);
    setRegistrationError(validate.error && validate.error.details[0].message);
    console.log(customAlphabet('0123456789shivamSHIVAMbruhBRUH', 10)());
  };

  return (
    <AnimatePresence>
      <motion.div className={Styles.Desktop}>
        <motion.div
          className={Styles.DesktopContainer}
          layout
          initial={isLogin ? 'open' : 'close'}
          animate={isLogin ? 'open' : 'close'}
          variants={ConVariants}>
          <motion.div variants={InputVariants} style={{ height: '60%' }}>
            <LoginElements
              className={Styles.Elements}
              data={loginData}
              setData={setLoginData}
            />
          </motion.div>
          <motion.div
            style={{ height: '60%' }}
            className={Styles.CloseTitle}
            variants={InputVariants}
            initial={isLogin ? 'close' : 'open'}
            animate={isLogin ? 'close' : 'open'}>
            <h2 style={{ position: 'relative', top: '40%' }}>
              Already a <br />
              member?
            </h2>
          </motion.div>
          <motion.button
            onClick={onLogin}
            className={Styles.BtnField}
            variants={ButtonVariants}>
            Login
          </motion.button>
          <motion.div className={Styles.JoinError} variants={ErrorVariants}>
            {loginError}
          </motion.div>
        </motion.div>
        <motion.div
          className={Styles.DesktopContainer}
          layout
          initial={isLogin ? 'close' : 'open'}
          animate={isLogin ? 'close' : 'open'}
          variants={ConVariants}>
          <motion.div variants={InputVariants} style={{ height: '60%' }}>
            <SignUpElements
              className={Styles.Elements}
              data={signupData}
              setData={setSignupData}
            />
          </motion.div>
          <motion.div
            style={{ height: '60%' }}
            className={Styles.CloseTitle}
            variants={InputVariants}
            initial={isLogin ? 'open' : 'close'}
            animate={isLogin ? 'open' : 'close'}>
            <h2 style={{ position: 'relative', top: '50%' }}>New Here?</h2>
          </motion.div>
          <motion.button
            onClick={onSignup}
            className={Styles.BtnField}
            variants={ButtonVariants}>
            SignUp
          </motion.button>
          <motion.div className={Styles.JoinError} variants={ErrorVariants}>
            {registerationError}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
