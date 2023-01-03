import React, { useState } from 'react';
import Styles from './../../../styles/Chat/desktop.module.css';
import ProfileComponent from '../ProfileComponent';
import { RiMenuFill, RiAddLine, RiLink } from 'react-icons/ri';
import JoinGroup from './GroupChat/JoinGroup';

export default function ChatList({
  selectedChat,
  setSelectedChat,
  chats,
  layoutStyle,
  title,
}) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);

  return (
    <div className={layoutStyle}>
      <Title
        title={title}
        setSettingsOpen={setSettingsOpen}
        settingsOpen={settingsOpen}
      />
      {settingsOpen && (
        <Settings
          setCreateOpen={setCreateOpen}
          setJoinOpen={setJoinOpen}
          setSettingsOpen={setSettingsOpen}
          joinOpen={joinOpen}
          createOpen={createOpen}
          settingsOpen={settingsOpen}
        />
      )}
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
              Selected={selectedChat._id === chat._id}
              onClick={() => setSelectedChat(chat)}
            />
          );
        })}
      </div>
      {joinOpen && <JoinGroup setJoinGroup={setJoinOpen} />}
    </div>
  );
}

function Title({ title, setSettingsOpen, settingsOpen }) {
  return (
    <div className={Styles.SectionTitle}>
      <span
        className={Styles.TextOverflow}
        style={{
          width: '80%',
        }}>
        {title}
      </span>
      <RiMenuFill
        style={{
          left: '0.85rem',
          '--iconRot': '0deg',
        }}
        className={Styles.SpinningSectionIcons}
        size="1.2rem"
        onClick={() => setSettingsOpen(!settingsOpen)}
      />
    </div>
  );
}

function Settings({
  joinOpen,
  setJoinOpen,
  createOpen,
  setCreateOpen,
  settingsOpen,
  setSettingsOpen,
}) {
  return (
    <div className={Styles.SettingsOverlay}>
      <div
        className={Styles.SettingsOverlayItemContainer}
        onClick={() => {
          setJoinOpen(true);
          setSettingsOpen(false);
        }}>
        <div
          style={{
            width: '2rem',
          }}>
          <RiLink size="1.3rem" />
        </div>
        <span>Join Group</span>
      </div>
      <div
        className={Styles.SettingsOverlayItemContainer}
        onClick={() => {
          setCreateOpen(true);
          setSettingsOpen(false);
        }}>
        <div
          style={{
            width: '2rem',
          }}>
          <RiAddLine size="1.3rem" />
        </div>
        <span>Create Group</span>
      </div>
    </div>
  );
}
