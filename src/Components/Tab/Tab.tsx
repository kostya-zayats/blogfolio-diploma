import React, {useState} from 'react';
import classnames from 'classnames';

import styles from './Tab.module.scss';

enum Tabs {
  Articles = 'articles',
  News = 'news'
}

const TABS_NAMES = [
  { name: 'Articles', key: Tabs.Articles },
  { name: 'News', key: Tabs.News }
];

const Tab = () => {

  const [activeTab, setActiveTab] = useState(Tabs.Articles);

  const onTabClick = (tab: Tabs) => {
    setActiveTab(tab);
  };

  return (
    <div  className={styles['tabs-wrap']}>
      { TABS_NAMES.map(tab => {
        return <div
          key={tab.key}
          className={
            classnames(
              styles.tab,
              {[styles['active-tab']] : tab.key === activeTab}
            )}
          onClick={() => onTabClick(tab.key)}>
          {tab.name}</div>
      })}
    </div>
  );
};

export default Tab;