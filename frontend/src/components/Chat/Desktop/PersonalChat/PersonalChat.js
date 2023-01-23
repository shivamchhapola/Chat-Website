import React, { useState } from 'react';
import PersonalChatList from '../ChatList';
import PersonalChatArea from '../ChatArea';
import PCStyles from './../../../../styles/Chat/personalchat.module.css';

//Demo
import Groups from '../../../../assets/Demo/GroupListDemo';
import Messages from '../../../../assets/Demo/MessageListDemo';

export default function PersonalChat({ Styles }) {
  const [selectedChat, setSelectedChat] = useState(Groups[0]);
  //const [selectedInfo, setSelectedInfo] = useState('chatrooms');

  return (
    <div className={Styles.MainContent}>
      <PersonalChatList
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
        chats={Groups}
        layoutStyle={PCStyles.PCList}
        title="Your Chats"
        isGC={true}
        page="pc"
      />
      <PersonalChatArea messages={Messages} layoutStyle={PCStyles.PCChat} />
    </div>
  );
}
