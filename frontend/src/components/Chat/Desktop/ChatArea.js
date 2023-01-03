import React, { useState } from 'react';
import EmojiPicker, { Theme } from 'emoji-picker-react';
import MessageComponent from '../MessageComponent';
import Styles from './../../../styles/Chat/desktop.module.css';
import {
  BsArrowRightCircleFill,
  BsPaperclip,
  BsEmojiSmile,
} from 'react-icons/bs';

export default function ChatArea({ messages, layoutStyle }) {
  const [showEmoji, setShowEmoji] = useState(false);

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
        {messages.map((message, i) => {
          return (
            <MessageComponent
              key={i}
              Styles={Styles}
              Name={message.name}
              ProfileImg={message.profilepic}
              Message={message.message}
              Time={message.time}
              SendByMe={message.SendByMe}
            />
          );
        })}
        <MessageComponent
          Styles={Styles}
          Name=""
          ProfileImg=""
          Message=""
          Time=""
          SendByMe={false}
        />
      </div>
      <div className={Styles.EnterMessage}>
        {showEmoji && (
          <div className={Styles.EmojiPicker || ''}>
            <EmojiPicker
              theme={Theme.DARK}
              width="25rem"
              height="20rem"
              previewConfig={{
                showPreview: false,
              }}
            />
          </div>
        )}
        <BsEmojiSmile
          style={
            showEmoji
              ? {
                  left: '1.15rem',
                  color: '#cbd5e0',
                }
              : {
                  left: '1.15rem',
                }
          }
          className={Styles.EnterMessageButton}
          size="1.35rem"
          onClick={() => {
            setShowEmoji(!showEmoji);
          }}
        />
        <input placeholder="Enter Message...." type="Text" />
        <BsPaperclip
          style={{
            right: '3.3rem',
            '--rot': '45deg',
          }}
          className={Styles.EnterMessageButton}
          size="1.5rem"
        />
        <BsArrowRightCircleFill
          style={{ right: '1.15rem' }}
          className={Styles.EnterMessageButton}
          size="1.5rem"
        />
      </div>
    </div>
  );
}
