import React, { useState } from 'react';
import Styles from './../../../styles/Chat/desktop.module.css';
import ProfileComponent from '../ProfileComponent';
import { RiMenuFill, RiAddLine, RiLink } from 'react-icons/ri';
import { OneInputPanel, CreateGroup } from './PopupPanels';

export default function ChatList({
  selectedChat,
  setSelectedChat,
  chats,
  layoutStyle,
  title,
  page,
}) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [addChat, setAddChat] = useState(false);

  return (
    <div className={layoutStyle}>
      <Title
        title={title}
        setSettingsOpen={setSettingsOpen}
        settingsOpen={settingsOpen}
        page={page}
        addChat={addChat}
        setAddChat={setAddChat}
      />
      {page === 'gc' && settingsOpen && (
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
      {joinOpen && (
        <OneInputPanel
          setPanel={setJoinOpen}
          placeholder="Enter Group ID"
          onSubmit={() => {}}
        />
      )}
      {createOpen && <CreateGroup setCreateGroup={setCreateOpen} />}
      {addChat && (
        <OneInputPanel
          setPanel={setAddChat}
          placeholder="Enter Username"
          onSubmit={() => {}}
        />
      )}
    </div>
  );
}

function Title({
  title,
  setSettingsOpen,
  settingsOpen,
  page,
  addChat,
  setAddChat,
}) {
  return (
    <div className={Styles.SectionTitle}>
      <span
        className={Styles.TextOverflow}
        style={
          page === 'gc'
            ? {
                width: '80%',
              }
            : {
                width: '84%',
              }
        }>
        {title}
      </span>
      {page === 'gc' ? (
        <RiMenuFill
          style={{
            '--iconRot': '0deg',
          }}
          className={Styles.SpinningSectionIcons}
          size="1.2rem"
          onClick={() => setSettingsOpen(!settingsOpen)}
        />
      ) : (
        <RiAddLine
          style={{
            '--iconRot': '180deg',
          }}
          className={Styles.SpinningSectionIcons}
          size="1.5rem"
          onClick={() => setAddChat(!addChat)}
        />
      )}
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
          setCreateOpen(false);
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
          setJoinOpen(false);
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
