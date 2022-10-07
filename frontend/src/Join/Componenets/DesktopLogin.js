import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoginElements from './LoginElements';
import SignUpElements from './SignUpElements';
import Styles from './../styles.module.css';

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
              onDataChange={ChangeLoginData}
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
            onClick={() => {
              setIsLogin(true);
            }}
            className={Styles.BtnField}
            variants={ButtonVariants}>
            Login
          </motion.button>
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
              onDataChange={ChangeSignupData}
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
            onClick={() => setIsLogin(false)}
            className={Styles.BtnField}
            variants={ButtonVariants}>
            SignUp
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
