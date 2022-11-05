import React from 'react';

export default function MessageComponent({
  Styles,
  ProfileImg,
  Name,
  Time,
  Message,
  SendByMe,
}) {
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
        <img alt="profile pic" src={ProfileImg} />
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
          <span className={Styles.MessageContentTopTime}>{Time}</span>
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
            {Message.text}
          </p>
        </div>
      </div>
    </div>
  );
}
