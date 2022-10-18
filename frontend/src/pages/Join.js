import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import WebFont from 'webfontloader';
import Desktop from '../components/Join/Desktop';
import Mobile from '../components/Join/Mobile';
import Styles from '../styles/Join/styles.module.css';

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
        <Mobile />
        <Desktop />
      </motion.div>
    </AnimatePresence>
  );
}

export default Join;
