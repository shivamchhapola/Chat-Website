import React, { useRef, useState } from 'react';
import GCStyles from './../../../styles/Chat/groupchat.module.css';
import Styles from './../../../styles/Chat/desktop.module.css';
import { MdOutlineAdd } from 'react-icons/md';

export function OneInputPanel({ setPanel, placeholder, onSubmit }) {
  const [id, setID] = useState('');

  return (
    <div className={GCStyles.PopupPanelContainer}>
      <div
        className={GCStyles.JoinCreateGroupPanel}
        style={{ '--panelx': '45%', '--panely': '30%' }}>
        <div className={GCStyles.JoinCreateGroupPanelMain}>
          <input
            placeholder={placeholder}
            value={id}
            onChange={(e) => {
              setID(e.target.value);
            }}
          />
        </div>
        <div className={GCStyles.JoinCreateGroupPanelBottom}>
          <button
            style={{ '--back': '#e2513e', '--text': '#e2e8f0' }}
            onClick={() => {
              setPanel(false);
            }}>
            Close
          </button>
          <button
            style={{ '--back': '#699adb', '--text': '#323e52' }}
            onClick={() => {
              console.log(onSubmit(id));
              setPanel(false);
            }}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export function CreateGroup({ setCreateGroup, onCreate }) {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const hiddenUploadImage = useRef(null);

  return (
    <div className={GCStyles.PopupPanelContainer}>
      <div
        className={GCStyles.JoinCreateGroupPanel}
        style={{ '--panelx': '50%', '--panely': '60%' }}>
        <div className={GCStyles.JoinCreateGroupPanelMain}>
          <div
            className={Styles.UploadProfilePicture}
            onClick={() => {
              hiddenUploadImage.current.click();
            }}>
            <input
              type="file"
              ref={hiddenUploadImage}
              style={{ display: 'none' }}
              onChange={(e) => {
                setImage(URL.createObjectURL(e.target.files[0]));
              }}
            />
            {image === '' ? (
              <MdOutlineAdd
                style={{
                  width: '100%',
                }}
                size="60%"
              />
            ) : (
              <img src={image} alt={''} />
            )}
          </div>
          <input
            placeholder="Enter Group Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <textarea
            rows={3}
            placeholder="Enter Group Bio"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
        </div>
        <div className={GCStyles.JoinCreateGroupPanelBottom}>
          <button
            style={{ '--back': '#e2513e', '--text': '#e2e8f0' }}
            onClick={() => {
              setCreateGroup(false);
            }}>
            Close
          </button>
          <button
            style={{ '--back': '#70da79', '--text': '#323e52' }}
            onClick={() => {
              onCreate(image, name, bio);
              setCreateGroup(false);
            }}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
