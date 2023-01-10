import React, { useEffect } from 'react';
import Styles from './../../../styles/Chat/desktop.module.css';
import GroupChat from './GroupChat/GroupChat';
import PersonalChat from './PersonalChat/PersonalChat';
import Search from './Search/Search';
import { MenuItem, MenuItemImage } from '../MenuItem';
import WebFont from 'webfontloader';
import { MdGroup, MdOutlineGroup } from 'react-icons/md';
import {
  RiChat2Fill,
  RiChat2Line,
  RiSearch2Fill,
  RiSearch2Line,
} from 'react-icons/ri';
import { useNavigate } from 'react-router';

//Demo
import ProfilePic from '../../../assets/Demo/hikigaya.jpg';

export default function Desktop({ page }) {
  const navigate = useNavigate();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Fira Sans Condensed', 'Roboto', 'Noto Sans'],
      },
    });
  }, []);

  return (
    <div className={Styles.Desktop}>
      <header>Chat Website</header>
      <div className={Styles.Menu}>
        <MenuItem
          Image={page === 'pc' ? RiChat2Fill : RiChat2Line}
          Color={page === 'pc' ? '#e2e8f0' : '#A0AEC0'}
          onClick={() => navigate('/pc')}
        />
        <MenuItem
          Image={page === 'gc' ? MdGroup : MdOutlineGroup}
          Color={page === 'gc' ? '#e2e8f0' : '#A0AEC0'}
          onClick={() => navigate('/gc')}
        />
        <MenuItem
          Image={page === 'search' ? RiSearch2Fill : RiSearch2Line}
          Color={page === 'search' ? '#e2e8f0' : '#A0AEC0'}
          onClick={() => navigate('/search')}
        />
        <MenuItemImage
          Image={ProfilePic}
          Color={page === 'profile' ? '#6d99ec' : 'rgba(0,0,0,0)'}
          onClick={() => navigate('/profile')}
        />
      </div>
      {page === 'gc' && <GroupChat Styles={Styles} />}
      {page === 'pc' && <PersonalChat Styles={Styles} />}
      {page === 'search' && <Search Styles={Styles} />}
    </div>
  );
}
