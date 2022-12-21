import React from 'react';
import Styles from './../../../styles/Chat/desktop.module.css';
import ProfileComponent from '../ProfileComponent';

export default function GroupChatList({
  selectedGroup,
  setSelectedGroup,
  chats,
  layoutStyle,
}) {
  return (
    <div className={layoutStyle}>
      <div className={Styles.SectionTitle}>
        <span
          className={Styles.TextOverflow}
          style={{
            paddingLeft: '0.4rem',
          }}>
          Your Groups
        </span>
      </div>
      <hr />
      <div className={`${Styles.FlexColumns} ${Styles.ProfileListScrollable}`}>
        {chats.map((chat) => {
          return (
            <ProfileComponent
              Styles={Styles}
              key={chat._id}
              Name={chat.name}
              Desc={chat.desc}
              Image={chat.img}
              Selected={selectedGroup._id === chat._id}
              onClick={() => setSelectedGroup(chat)}
            />
          );
        })}
      </div>
    </div>
  );
}
