import React from 'react';
import MessageComponent from '../MessageComponent';
import Styles from './../../../styles/Chat/desktop.module.css';

export default function ChatArea({ messages, layoutStyle }) {
  return (
    <div className={layoutStyle}>
      <div className={Styles.SectionTitle}>
        <span
          className={Styles.TextOverflow}
          style={{
            paddingLeft: '0.4rem',
          }}>
          / test
        </span>
      </div>
      <hr />
      <div className={`${Styles.FlexColumns} ${Styles.ChatAreaScrollable}`}>
        {messages.map((message) => {
          return (
            <MessageComponent
              key={message._id}
              Styles={Styles}
              Name={message.name}
              ProfileImg={message.profilepic}
              Message={message.message}
              Time={message.time}
              SendByMe={message.SendByMe}
            />
          );
        })}
      </div>
    </div>
  );
}
