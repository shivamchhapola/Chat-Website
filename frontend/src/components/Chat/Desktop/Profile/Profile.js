import React, { useRef, useState } from 'react';
import { MdOutlineAdd } from 'react-icons/md';
import PStyles from './../../../../styles/Chat/profile.module.css';

export default function Profile({ Styles, User }) {
  const hiddenUploadImage = useRef(null);
  const [image, setImage] = useState(User ? User.pic : '');
  const [username, setUsername] = useState(User ? User.username : '');
  const [name, setName] = useState(User ? User.name : '');
  const [bio, setBio] = useState(User ? User.bio : '');
  const [email, setEmail] = useState(User ? User.email : '');

  return (
    <div className={Styles.MainContent}>
      <div className={PStyles.ProfileContainer}>
        <div>
          <div
            className={Styles.UploadProfilePicture}
            style={{ '--size': '8rem' }}
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
            placeholder="Enter Your Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <textarea
            rows={3}
            placeholder="Enter Your Bio"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
          <input
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <span className={PStyles.ChangePass}>Change Password</span>
          <button style={{ '--back': '#699adb', '--text': '#323e52' }}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
