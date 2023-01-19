import React from 'react';
import SStyles from './../../../../styles/Chat/search.module.css';
import { MdSearch, MdChevronRight } from 'react-icons/md';

//demo
import Groups from '../../../../assets/Demo/GroupListDemo';

export default function Search({ Styles }) {
  return (
    <div className={Styles.MainContent}>
      <div className={SStyles.SearchMain}>
        <div className={SStyles.SearchHeader}>
          <input type="text" placeholder="Search..." />
          <button className={SStyles.SearchIcon}>
            <MdSearch size="1.7rem" />
          </button>
        </div>
        <div className={SStyles.SearchContent}>
          <div className={SStyles.SearchContentList}>
            <div className={SStyles.SearchContentTitle}>
              <MdChevronRight size="1.3rem" />
              Users
            </div>
            <hr />
            <div className={SStyles.SearchContentListItems}>
              <SearchListItem
                Image={Groups[0].img}
                Name={Groups[0].name}
                onClick={() => {}}
              />
              <SearchListItem
                Image={Groups[0].img}
                Name={Groups[0].name}
                onClick={() => {}}
              />
              <SearchListItem
                Image={Groups[0].img}
                Name={Groups[0].name}
                onClick={() => {}}
              />
              <SearchListItem
                Image={Groups[0].img}
                Name={Groups[0].name}
                onClick={() => {}}
              />
              <SearchListItem
                Image={Groups[0].img}
                Name={Groups[0].name}
                onClick={() => {}}
              />
              <SearchListItem
                Image={Groups[0].img}
                Name={Groups[0].name}
                onClick={() => {}}
              />
              <SearchListItem
                Image={Groups[0].img}
                Name={Groups[0].name}
                onClick={() => {}}
              />
              <SearchListItem
                Image={Groups[0].img}
                Name={Groups[0].name}
                onClick={() => {}}
              />
            </div>
          </div>
          <div className={SStyles.SearchContentList}>
            <div className={SStyles.SearchContentTitle}>
              <MdChevronRight size="1.3rem" />
              Groups
            </div>
            <hr />
            <div className={SStyles.SearchContentListItems}>
              <SearchListItem
                Image={Groups[0].img}
                Name={Groups[0].name}
                onClick={() => {}}
              />
              <SearchListItem
                Image={Groups[0].img}
                Name={Groups[0].name}
                onClick={() => {}}
              />
              <SearchListItem
                Image={Groups[0].img}
                Name={Groups[0].name}
                onClick={() => {}}
              />
              <SearchListItem
                Image={Groups[0].img}
                Name={Groups[0].name}
                onClick={() => {}}
              />
              <SearchListItem
                Image={Groups[0].img}
                Name={Groups[0].name}
                onClick={() => {}}
              />
              <SearchListItem
                Image={Groups[0].img}
                Name={Groups[0].name}
                onClick={() => {}}
              />
              <SearchListItem
                Image={Groups[0].img}
                Name={Groups[0].name}
                onClick={() => {}}
              />
              <SearchListItem
                Image={Groups[0].img}
                Name={Groups[0].name}
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchListItem({ Image, Name, onClick }) {
  return (
    <button onClick={onClick} className={SStyles.SearchListItem}>
      <div className={SStyles.ProfileIcon}>
        <img src={Image} alt="icon" />
      </div>
      <div className={SStyles.ProfileName}>{Name}</div>
    </button>
  );
}
