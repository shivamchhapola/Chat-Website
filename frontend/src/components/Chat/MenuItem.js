import React from 'react';

const MenuContainerStyle = {
  width: '100%',
  marginTop: '0.5rem',
  overflow: 'hidden',
  padding: '17%',
};

function MenuItem({ Image, Color, onClick }) {
  return (
    <button style={MenuContainerStyle} onClick={onClick}>
      <Image
        style={{
          height: '100%',
          width: '100%',
          color: Color,
        }}
      />
    </button>
  );
}

function MenuItemImage({ Image, Color, onClick }) {
  return (
    <button style={MenuContainerStyle} onClick={onClick}>
      <img
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
