import React, { useState } from 'react';
import ProfileComponent from '../ProfileComponent';
import MessageComponent from '../MessageComponent';
import GroupChatMenu from './GroupChatMenu';

//Demo
import Groups from '../../../assets/Demo/GroupListDemo';
import Messages from '../../../assets/Demo/MessageListDemo';

export default function GroupChat({ Styles }) {
  const [selectedGroup, setSelectedGroup] = useState({
    _id: 'echidna',
    name: 'Echidna Sama',
    desc: 'Group of Degenrates and CBT lovers',
    img: '',
    members: ['vashal', 'shivam', 'kunj', 'zeemon', 'billa', 'rudra', 'barbox'],
    chatrooms: ['general', 'memes', 'hentai', 'anime', 'arbaz ka dabha', 'CP'],
  });
  //const [selectedInfo, setSelectedInfo] = useState('chatrooms');

  return (
    <div className={Styles.GroupChat}>
      <div className={Styles.GCList}>
        <div className={Styles.SecTitle}>
          <span
            className={Styles.TextOverflow}
            style={{
              paddingLeft: '0.4rem',
            }}>
            Your Groups
          </span>
        </div>
        <hr />
        <div className={Styles.FlexColumns}>
          {Groups.map((group) => {
            return (
              <ProfileComponent
                Styles={Styles}
                key={group._id}
                Name={group.name}
                Desc={group.desc}
                Image={group.img}
                Selected={selectedGroup._id === group._id}
                onClick={() => setSelectedGroup(group)}
              />
            );
          })}
        </div>
      </div>
      <div className={Styles.GCInfo}>
        <GroupChatMenu Styles={Styles} SelectedGroup={selectedGroup} />
      </div>
      <div className={Styles.ChatArea}>
        <div className={Styles.SecTitle}>
          <span
            className={Styles.TextOverflow}
            style={{
              paddingLeft: '0.4rem',
            }}>
            / test
          </span>
        </div>
        <hr />
        <div className={Styles.FlexColumns}>
          {Messages.map((message) => {
            return (
              <MessageComponent
                key={message._id}
                Styles={Styles}
                Name={message.name}
                ProfileImg={message.profilepic}
                Message={message.message}
                Time={message.time}
                SendByMe={message.SendByMe}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
