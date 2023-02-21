import React, { useEffect, useState } from 'react';
import EmojiPicker, { Theme } from 'emoji-picker-react';
import MessageComponent from '../MessageComponent';
import Styles from './../../../styles/Chat/desktop.module.css';
import {
  BsArrowRightCircleFill,
  BsPaperclip,
  BsEmojiSmile,
} from 'react-icons/bs';
import axios from 'axios';

export default function ChatArea({ layoutStyle, chat, user, isPersonal }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [showEmoji, setShowEmoji] = useState(false);

  const sendMessage = async () => {
    await axios
      .post(
        'http://localhost:9000/api/' +
          (isPersonal ? 'personal/sendMessage' : 'message/createMessage'),
        JSON.stringify({
          content: message,
          chat: chat._id,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user}`,
          },
        }
      )
      .catch((e) => {
        console.log(e);
      })
      .then((res) => {
        return setMessages([...messages, res.data]);
      });
  };

  const fetchMessages = async (chatid) => {
    await axios
      .post(
        'http://localhost:9000/api/message/fetchMessages',
        JSON.stringify({ chat: chatid }),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user}`,
          },
        }
      )
      .catch((e) => {
        console.log(e);
      })
      .then((res) => {
        return setMessages(res.data);
      });
  };

  useEffect(() => {
    if (chat) fetchMessages(chat._id);
  }, [chat]);

  return (
    <div className={layoutStyle}>
      <div className={Styles.SectionTitle}>
        <span
          className={Styles.TextOverflow}
          style={{
            paddingLeft: '0.4rem',
          }}>
          {chat.name}
        </span>
      </div>
      <hr />
      <div className={`${Styles.FlexColumns} ${Styles.ChatAreaScrollable}`}>
        {messages.map((m) => {
          return (
            <MessageComponent
              key={m._id}
              Styles={Styles}
              Name={m.sender}
              ProfileImg={m.pic}
              Message={m.content}
              Time={m.updatedAt}
              SendByMe={false}
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
              onEmojiClick={(e) => {
                setMessage(message + e.emoji);
              }}
            />
          </div>
        )}
        <BsEmojiSmile
          style={
            showEmoji
              ? {
                  left: '1.15rem',
                  color: '#6d99ec',
                }
              : {
                  left: '1.15rem',
                }
          }
          className={Styles.EnterMessageButton}
          size="1.4rem"
          onClick={() => {
            setShowEmoji(!showEmoji);
          }}
        />
        <input
          placeholder="Enter Message...."
          type="Text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
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
          onClick={() => {
            setMessage('');
            sendMessage();
          }}
        />
      </div>
    </div>
  );
}
