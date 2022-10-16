import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoginElements from './LoginElements';
import SignUpElements from './SignUpElements';
import Styles from './../styles.module.css';
import { RegistrationValidate, LoginValidate } from './../Validation';
import { customAlphabet } from 'nanoid';

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

const LoginButtonVar = {
  open: {
    backgroundColor: '#E2E8F0',
    color: '#2D3748',
    transition: {
      duration: 0.2,
    },
  },
  close: {
    backgroundColor: '#2D3748',
    color: '#E2E8F0',
    borderRadius: '0 0 1rem 0',
    transition: {
      duration: 0.2,
    },
  },
};

const SignupButtonVar = {
  open: {
    backgroundColor: '#E2E8F0',
    color: '#2D3748',
    transition: {
      duration: 0.2,
    },
  },
  close: {
    backgroundColor: '#2D3748',
    color: '#E2E8F0',
    borderRadius: '0 0 0 1rem',
    transition: {
      duration: 0.2,
    },
  },
};

const ContVar = {
  init: {
    x: 600,
    display: 'none',
    transition: {
      duration: 0.3,
    },
  },
  anim: {
    x: 0,
    display: 'flex',
    transition: {
      duration: 0.3,
      delay: 0.3,
    },
  },
  close: {
    x: -600,
    transition: {
      duration: 0.3,
    },
  },
};

export default function MobileLogin() {
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

  const ChangeLoginData = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const ChangeSignupData = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const onLogin = () => {
    if (!isLogin) {
      setIsLogin(true);
      setRegistrationError('');
      return;
    }

    const validate = LoginValidate(loginData);
    setLoginError(validate.error && validate.error.details[0].message);
  };

  const onSignup = () => {
    if (isLogin) {
      setIsLogin(false);
      setLoginError('');
      return;
    }

    const validate = RegistrationValidate(signupData);
    setRegistrationError(validate.error && validate.error.details[0].message);
    console.log(customAlphabet('0123456789shivamSHIVAMbruhBRUH', 10)());
  };

  return (
    <motion.div className={Styles.Mobile}>
      <motion.div className={Styles.Selector}>
        <motion.button
          initial={isLogin ? 'open' : 'close'}
          animate={isLogin ? 'open' : 'close'}
          variants={LoginButtonVar}
          className={Styles.SelectorButton}
          onClick={() => {
            setIsLogin(true);
            setRegistrationError('');
          }}>
          Login
        </motion.button>
        <motion.button
          initial={!isLogin ? 'open' : 'close'}
          animate={!isLogin ? 'open' : 'close'}
          variants={SignupButtonVar}
          className={Styles.SelectorButton}
          onClick={() => {
            setIsLogin(false);
            setLoginError('');
          }}>
          SignUp
        </motion.button>
      </motion.div>
      <AnimatePresence initial={false}>
        {isLogin && (
          <motion.div
            key="login"
            className={Styles.SelectedElements}
            initial="init"
            animate="anim"
            exit="close"
            variants={ContVar}>
            <LoginElements
              className={Styles.MobileElements}
              onDataChange={ChangeLoginData}
            />
            <motion.button className={Styles.MBtnField} onClick={onLogin}>
              Login
            </motion.button>
            <motion.div className={Styles.JoinError} variants={ErrorVariants}>
              {loginError}
            </motion.div>
          </motion.div>
        )}
        {!isLogin && (
          <motion.div
            key="signup"
            className={Styles.SelectedElements}
            initial="init"
            animate="anim"
            exit="close"
            variants={ContVar}>
            <SignUpElements
              className={Styles.MobileElements}
              onDataChange={ChangeSignupData}
            />
            <motion.button className={Styles.MBtnField} onClick={onSignup}>
              SignUp
            </motion.button>
            <motion.div className={Styles.JoinError} variants={ErrorVariants}>
              {registerationError}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
