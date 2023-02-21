import React, { useEffect, useState } from 'react';
import PersonalChatList from '../ChatList';
import PersonalChatArea from '../ChatArea';
import PCStyles from './../../../../styles/Chat/personalchat.module.css';

//Demo
import axios from 'axios';

export default function PersonalChat({ Styles, userData, user }) {
  const [selectedChat, setSelectedChat] = useState({});
  const [chats, setChats] = useState([]);

  const fetchChats = async (ids) => {
    let g = [];
    return Promise.all(
      ids.map(async (id) => {
        return await axios
          .post(
            'http://localhost:9000/api/user/fetchuserbyid',
            JSON.stringify({ id }),
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user}`,
              },
            }
          )
          .then((res) => {
            return g.push(res.data);
          })
          .catch((e) => {
            throw e;
          });
      })
    ).then((res) => {
      setSelectedChat(g[0]);
      setChats(g);
    });
  };

  useEffect(() => {
    if (userData.chats) fetchChats(userData.chats);
  }, [userData]);

  return (
    <div className={Styles.MainContent}>
      <PersonalChatList
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
        chats={chats}
        layoutStyle={PCStyles.PCList}
        title="Your Chats"
        page="pc"
        user={user}
        userData={userData}
        setChats={setChats}
      />
      <PersonalChatArea
        layoutStyle={PCStyles.PCChat}
        user={user}
        chat={selectedChat}
        isPersonal={true}
      />
    </div>
  );
}
