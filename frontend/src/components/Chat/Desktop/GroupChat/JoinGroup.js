import React, { useState } from 'react';
import GCStyles from './../../../../styles/Chat/groupchat.module.css';

export default function JoinGroup({ setJoinGroup }) {
  const [id, setID] = useState('');

  return (
    <div className={GCStyles.PopupPanelContainer}>
      <div className={GCStyles.JoinGroupPanel}>
        <input
          placeholder="Enter Group ID"
          value={id}
          onChange={(e) => {
            setID(e.target.value);
          }}
        />
        <div>
          <button
            style={{ '--back': '#e2513e', '--text': '#e2e8f0' }}
            onClick={() => {
              setJoinGroup(false);
            }}>
            Close
          </button>
          <button>Join</button>
        </div>
      </div>
    </div>
  );
}
