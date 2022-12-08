import React from 'react';
import Styles from './../../styles/Chat/main.module.css';

function MenuItem({ Image, Selected, onClick }) {
  return (
    <button className={Styles.MenuItemContainer} onClick={onClick}>
      <Image
        className={Styles.MenuItemImage}
        style={
          Selected
            ? {
                color: '#58bfff',
              }
            : {}
        }
      />
    </button>
  );
}

function MenuItemImage({ Image, Color, onClick }) {
  return (
    <button className={Styles.MenuItemContainer} onClick={onClick}>
      <img
        className={Styles.MenuItemImage}
        src={Image}
        alt="Profile"
        style={{
          borderRadius: '100%',
          outline: `${Color} solid 3px`,
        }}
      />
    </button>
  );
}

export { MenuItem, MenuItemImage };
