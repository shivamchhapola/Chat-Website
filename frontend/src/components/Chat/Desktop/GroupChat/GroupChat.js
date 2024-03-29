import React, { useState, useEffect } from 'react';
import GroupChatMenu from './GroupChatMenu';
import GroupChatList from '../ChatList';
import GroupChatArea from '../ChatArea';
import GCStyles from './../../../../styles/Chat/groupchat.module.css';

//Demo
import Groups from '../../../../assets/Demo/GroupListDemo';
import Messages from '../../../../assets/Demo/MessageListDemo';
import axios from 'axios';

export default function GroupChat({ Styles, userData, user }) {
  //const [user, setUser] = useState(localStorage.getItem('user'));
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState({});
  const [selectedChatroom, setSelectedChatroom] = useState({});

  const fetchGroups = async (ids) => {
    let g = [];
    return Promise.all(
      ids.map(async (id) => {
        await axios
          .post(
            'http://localhost:9000/api/group/fetchgroup',
            JSON.stringify({ id: id }),
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
      setSelectedGroup(g[0]);
      setGroups(g);
    });
  };

  useEffect(() => {
    //setUser(localStorage.getItem('user'));
    if (userData.groups) fetchGroups(userData.groups);
  }, [userData]);

  useEffect(() => {}, [groups]);

  useEffect(() => {
    setGroups(
      groups.map((group) => {
        if (group === selectedGroup) {
          group.rooms = selectedGroup.rooms;
        }
        return group;
      })
    );
  }, [selectedGroup]);

  return (
    <div className={Styles.MainContent}>
      <GroupChatList
        selectedChat={selectedGroup}
        setSelectedChat={setSelectedGroup}
        chats={groups}
        layoutStyle={GCStyles.GCList}
        title="Your Groups"
        isGC={true}
        page="gc"
        user={user}
        userData={userData}
        setChats={setGroups}
      />
      <GroupChatMenu
        selectedGroup={selectedGroup}
        user={user}
        selectedChatroom={selectedChatroom}
        setSelectedChatroom={setSelectedChatroom}
      />
      <GroupChatArea
        layoutStyle={GCStyles.GCChat}
        chat={selectedChatroom}
        user={user}
      />
    </div>
  );
}
