import React, { useState } from 'react';
import ProfileComponent from '../ProfileComponent';
import MessageComponent from '../MessageComponent';
import GroupChatMenu from './GroupChatMenu';

//Demo
import Groups from '../../../assets/Demo/GroupListDemo';
import Messages from '../../../assets/Demo/MessageListDemo';

export default function GroupChat({ Styles }) {
  const [selectedGroup, setSelectedGroup] = useState('vac');
  //const [selectedInfo, setSelectedInfo] = useState('chatrooms');

  return (
    <div className={Styles.GroupChat}>
      <div className={Styles.GCList}>
        <div className={Styles.SecTitle}>· Your Groups</div>
        <hr />
        <div className={Styles.FlexColumns}>
          {Groups.map((group) => {
            return (
              <ProfileComponent
                key={group._id}
                Styles={Styles}
                Name={group.name}
                Desc={group.desc}
                Image={group.img}
                Selected={selectedGroup === group._id}
                onClick={() => setSelectedGroup(group._id)}
              />
            );
          })}
        </div>
      </div>
      <div className={Styles.GCInfo}>
        <div className={Styles.SecTitle}>
          {'> ' + Groups.find((e) => e._id === selectedGroup).name}
        </div>
        <hr />
        <GroupChatMenu Styles={Styles} />
      </div>
      <div className={Styles.ChatArea}>
        <div className={Styles.SecTitle}>/ general</div>
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
