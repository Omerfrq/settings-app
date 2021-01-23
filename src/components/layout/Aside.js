import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/aside.css';

export default function Aside() {
  let [linkActive, setLinkActive] = useState('');

  return (
    <aside>
      <div className='sidebar'>
        <div className='top-category'>
          <Link to='/Home'>
            <div
              className={`category category-1 ${
                linkActive === 'Home' ? 'active' : ''
              }`}
              onClick={() => setLinkActive('Home')}
            >
              <img
                src={require('../../images/side/category-1.svg').default}
                alt='Home'
              />
              <p>Home</p>
            </div>
          </Link>
          <Link to='/Tag Content'>
            <div
              className={`category category-2 ${
                linkActive === 'tagContent' ? 'active' : ''
              }`}
              onClick={() => setLinkActive('tagContent')}
            >
              <img
                src={require('../../images/side/category-2.svg').default}
                alt='Tag Content'
              />
              <p>Tag Content</p>
            </div>
          </Link>
          <Link to='/Library'>
            <div
              className={`category category-3 ${
                linkActive === 'library' ? 'active' : ''
              }`}
              onClick={() => setLinkActive('library')}
            >
              <img
                src={require('../../images/side/category-3.svg').default}
                alt='Library'
              />
              <p>Library</p>
            </div>
          </Link>
          <Link to='/Analytics'>
            <div
              className={`category category-4 ${
                linkActive === 'analytics' ? 'active' : ''
              }`}
              onClick={() => setLinkActive('analytics')}
            >
              <img
                src={require('../../images/side/category-4.svg').default}
                alt='Analytics'
              />
              <p>Analytics</p>
            </div>
          </Link>
          <Link to='/Settings'>
            <div
              className={`category category-5 ${
                linkActive === 'settings' ? 'active' : ''
              }`}
              onClick={() => setLinkActive('settings')}
            >
              <img
                src={require('../../images/side/category-5.svg').default}
                alt='Settings'
              />
              <p>Settings</p>
            </div>
          </Link>
        </div>
        <div className='bottom-category'>
          <Link to='/Support'>
            <div
              className={`category category-6 ${
                linkActive === 'support' ? 'active' : ''
              }`}
              onClick={() => setLinkActive('support')}
            >
              <img
                src={require('../../images/side/category-6.svg').default}
                alt='Support'
              />
              <p>Support</p>
            </div>
          </Link>
        </div>
      </div>
    </aside>
  );
}
