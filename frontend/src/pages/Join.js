import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import WebFont from 'webfontloader';
import Desktop from '../components/Join/Desktop';
import Mobile from '../components/Join/Mobile';
import Styles from '../styles/Join/styles.module.css';
import { LoginValidate } from '../utils/Join/Validation';
import { postdata } from '../utils/Join/Postdata';

export const JoinContext = React.createContext();

function Join() {
  const [isLogin, setIsLogin] = useState(true);
  const [joinError, setJoinError] = useState({
    login: '',
    signup: '',
  });
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
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    token: '',
  });

  const onLogin = async () => {
    if (!isLogin) {
      setIsLogin(true);
      setJoinError({ login: '', signup: '' });
      setSignupData({
        name: '',
        password: '',
        confirmPassword: '',
        email: '',
      });
      return;
    }
    const validate = LoginValidate(loginData);
    validate.error
      ? setJoinError({ ...joinError, login: validate.error.details[0].message })
      : await postdata('login', loginData).then((res) => {
          setUser(res.data);
          console.log(res.data);
        });
  };

  const onSignup = async () => {
    if (isLogin) {
      setIsLogin(false);
      setJoinError({ login: '', signup: '' });
      setLoginData({
        username: '',
        password: '',
      });
      return;
    }
    const validate = LoginValidate(signupData);
    validate.error
      ? setJoinError({
          ...joinError,
          signup: validate.error.details[0].message,
        })
      : await postdata('signup', signupData).then((res) => {
          setUser(res.data);
          console.log(res.data);
        });
  };

  const contextValue = {
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
  };
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Dosis', 'Plus Jakarta Sans'],
      },
    });
  }, []);

  return (
    <AnimatePresence>
      <JoinContext.Provider value={contextValue}>
        <motion.div className={Styles.Join}>
          <Mobile />
          <Desktop />
        </motion.div>
      </JoinContext.Provider>
    </AnimatePresence>
  );
}

export default Join;
