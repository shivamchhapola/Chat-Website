import React from 'react';
import { RiSettings3Fill } from 'react-icons/ri';
import { GiNestedHexagons } from 'react-icons/gi';
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
        <GiNestedHexagons style={{ color: '#a0aec0' }} />
        <span
          className={Styles.TextOverflow}
          style={{
            width: '75%',
            paddingLeft: '0.3rem',
          }}>
          {selectedGroup.name}
        </span>
        <RiSettings3Fill
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
            paddingTop: '1rem',
            position: 'relative',
          }}>
          <div
            className={GCStyles.GCInfoItemTitle}
            style={{
              fontSize: '0.85rem',
              color: '#a0aec0',
            }}>
            Chatrooms
          </div>
          <span className={GCStyles.SpinningSectionIcons}>
            <MdAdd size="1.2rem" />
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
