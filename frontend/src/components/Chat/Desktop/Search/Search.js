import React from 'react';
import SStyles from './../../../../styles/Chat/search.module.css';
import { MdSearch } from 'react-icons/md';

export default function Search({ Styles }) {
  return (
    <div className={SStyles.SearchMainContainer}>
      <div className={SStyles.SearchHeader}>
        <input type="text" placeholder="Search......" />
        <MdSearch />
      </div>
    </div>
  );
}
