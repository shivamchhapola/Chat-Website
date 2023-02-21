import React, { useEffect, useState } from 'react';
import TransparentImage from './../../assets/Images/transparent.png';

export default function MessageComponent({
  Styles,
  ProfileImg,
  Name,
  Time,
  Message,
  SendByMe,
}) {
  const [date, setDate] = useState('');

  useEffect(() => {
    const d = new Date(Time);
    if (d != 'Invalid Date') setDate(d.toLocaleString());
    else setDate('');
  }, [Time]);

  return (
    <div
      className={Styles.Message}
      style={
        SendByMe
          ? {
              alignContent: 'flex-end',
              flexDirection: 'row-reverse',
              alignSelf: 'flex-end',
            }
          : {}
      }>
      <div
        className={Styles.MessageProfilePic}
        style={
          SendByMe
            ? {
                marginLeft: '0rem',
                marginRight: '0.5rem',
              }
            : {}
        }>
        <img alt="profile pic" src={ProfileImg || TransparentImage} />
      </div>
      <div className={Styles.MessageContent}>
        <div
          className={Styles.MessageContentTop}
          style={
            SendByMe
              ? {
                  flexDirection: 'row-reverse',
                }
              : {}
          }>
          <span className={Styles.MessageContentTopName}>{Name}</span>
          <span className={Styles.MessageContentTopTime}>{date}</span>
        </div>
        <div className={Styles.MessageContentBottom}>
          <p
            className={Styles.MessageContentBottomText}
            style={
              SendByMe
                ? {
                    textAlign: 'right',
                    marginLeft: '0rem',
                    marginRight: '0.5rem',
                  }
                : {}
            }>
            {Message}
          </p>
        </div>
      </div>
    </div>
  );
}
