import React from 'react';
import { RiSettings3Fill } from 'react-icons/ri';
import { GiNestedHexagons } from 'react-icons/gi';
import {
  MdGroup,
  MdPersonAddAlt1,
  MdSubdirectoryArrowRight,
  MdAdd,
} from 'react-icons/md';

export default function GroupChatMenu({ Styles, SelectedGroup }) {
  return (
    <>
      <div className={Styles.SecTitle}>
        <GiNestedHexagons style={{ color: '#a0aec0' }} />
        <span
          className={Styles.TextOverflow}
          style={{
            width: '75%',
            paddingLeft: '0.3rem',
          }}>
          {SelectedGroup.name}
        </span>
        <RiSettings3Fill className={Styles.GCMenuIcons} size="1.2rem" />
      </div>
      <hr />
      <div
        className={Styles.FlexColumns}
        style={{
          height: '80%',
        }}>
        <div className={Styles.GCInfoItemContainer}>
          <span>
            <MdGroup size="1.3rem" />
          </span>
          <div className={Styles.GCInfoItemTitle}>
            Total Members: {SelectedGroup.members.length}
          </div>
        </div>
        <div className={Styles.GCInfoItemContainer}>
          <span>
            <MdPersonAddAlt1 size="1.3rem" />
          </span>
          <div className={Styles.GCInfoItemTitle}>Invite People</div>
        </div>
        <div
          className={Styles.GCInfoItemContainer}
          style={{
            paddingTop: '1rem',
            position: 'relative',
          }}>
          <div
            className={Styles.GCInfoItemTitle}
            style={{
              fontSize: '0.85rem',
              color: '#a0aec0',
            }}>
            Chatrooms
          </div>
          <span className={Styles.GCMenuIcons}>
            <MdAdd size="1.2rem" />
          </span>
        </div>
        <div className={Styles.GCInfoCR}>
          <div
            className={Styles.GCInfoCRContainer}
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
              className={Styles.GCInfoCRTitle}
              style={{
                color: '#e2e8f0',
              }}>
              test
            </div>
          </div>
          {SelectedGroup.chatrooms.map((cr, i) => {
            return (
              <div className={Styles.GCInfoCRContainer} key={i}>
                <span>
                  <MdSubdirectoryArrowRight size="1.2rem" />
                </span>
                <div
                  className={`${Styles.GCInfoCRTitle} ${Styles.TextOverflow}`}>
                  {cr}
                </div>
              </div>
            );
          })}
          <div className={Styles.GCInfoItemContainer}>
            <span>
              <MdPersonAddAlt1 size="1.3rem" />
            </span>
            <div className={Styles.GCInfoItemTitle}>Invite People</div>
          </div>
        </div>
      </div>
    </>
  );
}
