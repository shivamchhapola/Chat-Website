import React from 'react';
import { RiSettings3Fill } from 'react-icons/ri';
import GCStyles from './../../../../styles/Chat/groupchat.module.css';
import Styles from './../../../../styles/Chat/desktop.module.css';
import {
  MdGroup,
  MdPersonAddAlt1,
  MdSubdirectoryArrowRight,
  MdAdd,
} from 'react-icons/md';

export default function GroupChatMenu({ selectedGroup }) {
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
            Total Members: {selectedGroup.members.length}
          </div>
        </div>
        <div className={GCStyles.GCInfoItemContainer}>
          <span>
            <MdPersonAddAlt1 size="1.3rem" />
          </span>
          <div className={GCStyles.GCInfoItemTitle}>Invite People</div>
        </div>
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
            style={{ '--posRight': '0.25rem' }}
            className={Styles.SpinningSectionIcons}>
            <MdAdd size="1.35rem" />
          </span>
        </div>
        <div className={GCStyles.GCInfoCR}>
          <div
            className={GCStyles.GCInfoCRContainer}
            style={{
              backgroundColor: '#1E283D',
              borderRadius: '0.3rem',
            }}>
            <span
              style={{
                color: '#e2e8f0',
              }}>
              <MdSubdirectoryArrowRight size="1.2rem" />
            </span>
            <div
              className={GCStyles.GCInfoCRTitle}
              style={{
                color: '#e2e8f0',
              }}>
              test
            </div>
          </div>
          {selectedGroup.chatrooms.map((cr, i) => {
            return (
              <div className={GCStyles.GCInfoCRContainer} key={i}>
                <span>
                  <MdSubdirectoryArrowRight size="1.2rem" />
                </span>
                <div
                  className={`${GCStyles.GCInfoCRTitle} ${Styles.TextOverflow}`}>
                  {cr}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
