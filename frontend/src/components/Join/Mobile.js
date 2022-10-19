import React, { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoginElements from './LoginElements';
import SignUpElements from './SignUpElements';
import Styles from '../../styles/Join/styles.module.css';
import { JoinContext } from '../../pages/Join';

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
  const {
    isLogin,
    setIsLogin,
    joinError,
    setJoinError,
    loginData,
    setLoginData,
    signupData,
    setSignupData,
    onLogin,
    onSignup,
  } = useContext(JoinContext);

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
            setJoinError({ login: '', signup: '' });
            setSignupData({
              name: '',
              password: '',
              confirmPassword: '',
              email: '',
            });
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
            setJoinError({ login: '', signup: '' });
            setLoginData({
              username: '',
              password: '',
            });
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
              data={loginData}
              setData={setLoginData}
            />
            <motion.button className={Styles.MBtnField} onClick={onLogin}>
              Login
            </motion.button>
            <motion.div
              className={Styles.JoinError}
              variants={ErrorVariants}
              style={
                joinError.login === ''
                  ? { display: 'none' }
                  : { display: 'block' }
              }>
              {joinError.login}
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
              data={signupData}
              setData={setSignupData}
            />
            <motion.button className={Styles.MBtnField} onClick={onSignup}>
              SignUp
            </motion.button>
            <motion.div
              className={Styles.JoinError}
              variants={ErrorVariants}
              style={
                joinError.signup === ''
                  ? { display: 'none' }
                  : { display: 'block' }
              }>
              {joinError.signup}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
