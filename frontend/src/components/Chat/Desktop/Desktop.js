import React, { useEffect, useState } from 'react';
import Styles from './../../../styles/Chat/desktop.module.css';
import GroupChat from './GroupChat';
import { MenuItem, MenuItemImage } from '../MenuItem';
import WebFont from 'webfontloader';
import { MdGroup, MdOutlineGroup } from 'react-icons/md';
import {
  RiChat2Fill,
  RiChat2Line,
  RiSearch2Fill,
  RiSearch2Line,
} from 'react-icons/ri';

//Demo
import ProfilePic from '../../../assets/Demo/hikigaya.jpg';

export default function Desktop() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Fira Sans Condensed', 'Roboto', 'Noto Sans'],
      },
    });
    const handleContextmenu = (e) => {
      //e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextmenu);
    return function cleanup() {
      document.removeEventListener('contextmenu', handleContextmenu);
    };
  }, []);

  const [selectedMenu, setSelectedMenu] = useState('gc');

  return (
    <div className={Styles.Desktop}>
      <header>Chat Website</header>
      <div className={Styles.Menu}>
        <MenuItem
          Image={selectedMenu === 'dm' ? RiChat2Fill : RiChat2Line}
          Color={selectedMenu === 'dm' ? '#e2e8f0' : '#A0AEC0'}
          onClick={() => setSelectedMenu('dm')}
        />
        <MenuItem
          Image={selectedMenu === 'gc' ? MdGroup : MdOutlineGroup}
          Color={selectedMenu === 'gc' ? '#e2e8f0' : '#A0AEC0'}
          onClick={() => setSelectedMenu('gc')}
        />
        <MenuItem
          Image={selectedMenu === 'search' ? RiSearch2Fill : RiSearch2Line}
          Color={selectedMenu === 'search' ? '#e2e8f0' : '#A0AEC0'}
          onClick={() => setSelectedMenu('search')}
        />
        <MenuItemImage
          Image={ProfilePic}
          Color={selectedMenu === 'profile' ? '#e2e8f0' : 'rgba(0,0,0,0)'}
          onClick={() => setSelectedMenu('profile')}
        />
      </div>
      <main>
        <GroupChat Styles={Styles} />
      </main>
    </div>
  );
}
