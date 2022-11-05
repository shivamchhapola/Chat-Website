import React from 'react';

export default function ProfileComponent({
  Styles,
  GCImage,
  GCName,
  GCDesc,
  BGColor,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={Styles.ProfileComponent}
      style={{ backgroundColor: BGColor }}>
      <div className={Styles.ProfileIcon}>
        <img src={GCImage} alt="icon" />
      </div>
      <div className={Styles.ProfileInfo}>
        <div className={Styles.ProfileName}>{GCName}</div>
        <div className={Styles.ProfileDesc}>{GCDesc}</div>
      </div>
    </button>
  );
}
