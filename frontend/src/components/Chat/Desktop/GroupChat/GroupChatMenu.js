import React, { useEffect, useState } from 'react';
import { RiSettings3Fill } from 'react-icons/ri';
import GCStyles from './../../../../styles/Chat/groupchat.module.css';
import Styles from './../../../../styles/Chat/desktop.module.css';
import {
  MdGroup,
  MdPersonAddAlt1,
  MdSubdirectoryArrowRight,
  MdAdd,
} from 'react-icons/md';
import axios from 'axios';
import { OneInputPanel } from '../PopupPanels';

export default function GroupChatMenu({
  selectedGroup,
  user,
  selectedChatroom,
  setSelectedChatroom,
}) {
  const [chatrooms, setChatrooms] = useState([]);
  const [addChatPanelOpen, setAddChatPanelOpen] = useState(false);

  const fetchChatrooms = async (ids) => {
    let cr = [];
    return Promise.all(
      ids.map(async (id) => {
        await axios
          .post(
            'http://localhost:9000/api/group/fetchchatroom',
            JSON.stringify({ id: id }),
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user}`,
              },
            }
          )
          .then((res) => {
            return cr.push(res.data);
          })
          .catch((e) => {
            throw e;
          });
      })
    ).then((res) => {
      setSelectedChatroom(cr[0]);
      setChatrooms(cr);
    });
  };

  const addChatroom = async (n) => {
    return await axios
      .post(
        'http://localhost:9000/api/group/createChatRoom',
        JSON.stringify({ name: n, id: selectedGroup._id }),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 500) return;
        selectedGroup.rooms.push(res.data._id);
        return setChatrooms([...chatrooms, res.data]);
      })
      .catch((e) => {
        throw e;
      });
  };

  useEffect(() => {
    if (selectedGroup.rooms) fetchChatrooms(selectedGroup.rooms);
  }, [selectedGroup]);

  return (
    <div className={GCStyles.GCInfo}>
      <div className={Styles.SectionTitle}>
        <span
          className={Styles.TextOverflow}
          style={{
            width: '80%',
          }}>
          {selectedGroup.name}
        </span>
        <RiSettings3Fill
          style={{
            left: '0rem',
          }}
          className={Styles.SpinningSectionIcons}
          size="1.2rem"
        />
      </div>
      <hr />
      <div
        className={Styles.FlexColumns}
        style={{
          height: '85%',
        }}>
        <div className={GCStyles.GCInfoItemContainer}>
          <span>
            <MdGroup size="1.3rem" />
          </span>
          <div className={GCStyles.GCInfoItemTitle}>
            Total Members:
            {selectedGroup.members ? selectedGroup.members.length : ''}
          </div>
        </div>
        {/*<div className={GCStyles.GCInfoItemContainer}>
          <span>
            <MdPersonAddAlt1 size="1.3rem" />
          </span>
          <div className={GCStyles.GCInfoItemTitle}>Invite People</div>
      </div>*/}
        <div
          className={GCStyles.GCInfoItemContainer}
          style={{
            padding: '1rem 0.5rem 0 1.5rem',
          }}>
          <div
            className={GCStyles.GCInfoItemTitle}
            style={{
              color: '#a0aec0',
            }}>
            Chatrooms
          </div>
          <span
            onClick={() => setAddChatPanelOpen(true)}
            style={{ '--posRight': '0.25rem' }}
            className={Styles.SpinningSectionIcons}>
            <MdAdd size="1.35rem" />
          </span>
          {addChatPanelOpen && (
            <OneInputPanel
              setPanel={setAddChatPanelOpen}
              placeholder="Add Chatroom"
              onSubmit={addChatroom}
            />
          )}
        </div>
        <div className={GCStyles.GCInfoCR}>
          {chatrooms.map((cr) => {
            return (
              <div
                className={GCStyles.GCInfoCRContainer}
                key={cr._id}
                onClick={() => {
                  !(selectedChatroom._id === cr._id) && setSelectedChatroom(cr);
                }}
                style={
                  selectedChatroom._id === cr._id
                    ? {
                        backgroundColor: '#1E283D',
                        borderRadius: '0.3rem',
                      }
                    : {}
                }>
                <span>
                  <MdSubdirectoryArrowRight size="1.2rem" />
                </span>
                <div
                  className={`${GCStyles.GCInfoCRTitle} ${Styles.TextOverflow}`}>
                  {cr.chatName}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
