import React from 'react';

export default function ProfileComponent({
  Styles,
  Image,
  Name,
  Desc,
  Selected,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={Styles.ProfileComponent}
      style={Selected ? { backgroundColor: '#1E283D' } : {}}>
      <div className={Styles.ProfileIcon}>
        <img src={Image} alt="icon" />
      </div>
      <div className={Styles.ProfileInfo}>
        <div className={Styles.ProfileName}>{Name}</div>
        <div className={Styles.ProfileDesc}>{Desc}</div>
      </div>
    </button>
  );
}
