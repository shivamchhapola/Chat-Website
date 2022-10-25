import React, { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoginElements from './LoginElements';
import SignUpElements from './SignUpElements';
import Styles from '../../styles/Join/styles.module.css';
import { JoinContext } from '../../pages/Join';

const ConVariants = {
  open: {
    width: '65%',
    backgroundColor: '#E2E8F0',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  close: {
    width: '35%',
    backgroundColor: '#2D3748',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
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
  },
  close: {
    opacity: 0,
    transition: {
      duration: 0.5,
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
  const {
    isLogin,
    joinError,
    loginData,
    setLoginData,
    signupData,
    setSignupData,
    onLogin,
    onSignup,
  } = useContext(JoinContext);

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
      </motion.div>
    </AnimatePresence>
  );
}
