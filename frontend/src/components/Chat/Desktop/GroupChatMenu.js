import React from 'react';

export default function GroupChatMenu({ Styles }) {
  return (
    <div className={Styles.FlexColumns}>
      <div className={Styles.GCInfoItemContainer}>
        <div className={Styles.GCInfoItemTitle}>· Total Members: 69</div>
      </div>
      <div className={Styles.GCInfoItemContainer}>
        <div className={Styles.GCInfoItemTitle}>· Members</div>
      </div>
      <div className={Styles.GCInfoItemContainer}>
        <div className={Styles.GCInfoItemTitle}>· Settings</div>
      </div>
      <div className={Styles.GCInfoItemContainer}>
        <div className={Styles.GCInfoItemTitle}>· Invite Perople</div>
      </div>
      <div className={Styles.GCInfoItemContainer}>
        <div className={Styles.GCInfoItemTitle}>· Create Chatroom</div>
      </div>
      <div className={Styles.GCInfoItemContainer}>
        <div className={Styles.GCInfoItemTitle}>· Chatrooms</div>
      </div>
    </div>
  );
}
