import React, { useState } from 'react';
import GroupChatMenu from './GroupChatMenu';
import GroupChatList from '../ChatList';
import GroupChatArea from '../ChatArea';
import GCStyles from './../../../../styles/Chat/groupchat.module.css';

//Demo
import Groups from '../../../../assets/Demo/GroupListDemo';
import Messages from '../../../../assets/Demo/MessageListDemo';

export default function GroupChat({ Styles }) {
  const [selectedGroup, setSelectedGroup] = useState(Groups[0]);
  //const [selectedInfo, setSelectedInfo] = useState('chatrooms');

  return (
    <div className={Styles.MainContent}>
      <GroupChatList
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
        chats={Groups}
        layoutStyle={GCStyles.GCList}
      />
      <GroupChatMenu selectedGroup={selectedGroup} />
      <GroupChatArea messages={Messages} layoutStyle={GCStyles.GCChat} />
    </div>
  );
}
