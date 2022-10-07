import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import WebFont from 'webfontloader';
import DesktopLogin from './Componenets/DesktopLogin';
import MobileLogin from './Componenets/MobileLogin';
import Styles from './styles.module.css'

function Join() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Dosis', 'Plus Jakarta Sans'],
      },
    });
  }, []);

  return (
    <AnimatePresence>
      <motion.div className={Styles.Join}>
        <MobileLogin />
        <DesktopLogin />
      </motion.div>
    </AnimatePresence>
  );
}

export default Join;
