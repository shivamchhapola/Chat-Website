import React, { useState } from 'react';
import Styles from './../../../styles/Chat/desktop.module.css';
import ProfileComponent from '../ProfileComponent';
import { RiMenuFill, RiAddLine, RiLink } from 'react-icons/ri';
import { OneInputPanel, CreateGroup } from './PopupPanels';
import axios from 'axios';

export default function ChatList({
  selectedChat,
  setSelectedChat,
  chats,
  layoutStyle,
  title,
  page,
  user,
  userData,
}) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [addChat, setAddChat] = useState(false);

  const joinGroup = async (id) => {
    return await axios
      .post(
        'http://localhost:9000/api/group/findgroup',
        JSON.stringify({ uid: id }),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user}`,
          },
        }
      )
      .then(async (res) => {
        return await axios
          .post(
            'http://localhost:9000/api/group/addmember',
            JSON.stringify({ gid: res.data._id, mid: userData._id }),
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user}`,
              },
            }
          )
          .then((re) => {
            if (res.status === 500) return;
            return chats.push(res);
          })
          .catch((e) => {
            throw e;
          });
      })
      .catch((e) => {
        throw e;
      });
  };

  const createGroup = async (image, name, bio) => {
    return await axios
      .post(
        'http://localhost:9000/api/group/createGroup',
        JSON.stringify({ image: image, name: name, bio: bio }),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 500) return;
        return chats.push(res);
      })
      .catch((e) => {
        throw e;
      });
  };

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
        {chats.map((c) => {
          return (
            <ProfileComponent
              Styles={Styles}
              key={c._id}
              Name={c.name}
              Desc={c.bio}
              Image={c.image}
              Selected={selectedChat._id === c._id}
              onClick={() => setSelectedChat(c)}
            />
          );
        })}
      </div>
      {joinOpen && (
        <OneInputPanel
          setPanel={setJoinOpen}
          placeholder="Enter Group ID"
          onSubmit={joinGroup}
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
