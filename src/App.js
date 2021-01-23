import React, { useState } from 'react';
import Header from './components/layout/Header';
import Aside from './components/layout/Aside';
import Panel from './components/pages/Panel';
import Home from './components/pages/Home';
import TagContent from './components/pages//TagContent';
import TagImage from './components/pages/tagContent/TagImage';
import Library from './components/pages/Library';
import Analytics from './components/pages/Analytics';
import Settings from './components/pages/Settings';
import Support from './components/pages/Support';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/main.css';

export default function App() {
  const [validWindowSize, setValidWindowSize] = useState('false');
  function checkWindowSize() {
    window.innerWidth < 1024 || window.innerHeight < 768
      ? setValidWindowSize(false)
      : setValidWindowSize(true);
    window.innerWidth < 0 || window.innerHeight < 0
      ? setValidWindowSize(false)
      : setValidWindowSize(true);
  }

  React.useEffect(() => {
    window.addEventListener('resize', checkWindowSize);
    checkWindowSize();
  });

  return (
    <div className='App'>
      <Router>
        <Header visible={validWindowSize} />
        <main className={validWindowSize ? '' : 'd-none'}>
          <Aside />
          <Switch>
            <Route
              exact
              path='/Home'
              component={() => <Panel component={Home} />}
            />
            <Route
              exact
              path='/Tag Content'
              component={() => <Panel component={TagContent} />}
            />
            <Route
              path='/Tag Content/Tag Image/'
              component={() => <Panel component={TagImage} />}
            />
            <Route
              exact
              path='/Library'
              component={() => <Panel component={Library} />}
            />
            <Route
              exact
              path='/Analytics'
              component={() => <Panel component={Analytics} />}
            />
            <Route
              exact
              path='/Settings'
              component={() => <Panel component={Settings} />}
            />
            <Route
              exact
              path='/Support'
              component={() => <Panel component={Support} />}
            />
          </Switch>
        </main>
        <div className={`window-size-error ${validWindowSize ? 'd-none' : ''}`}>
          <div className='message'>
            <div className='logo'>
              <img
                src={require('./images/header/logo.png').default}
                alt='Logo'
              />
            </div>
            <p>
              Please expand your browser window. we require minimum frame
              dimensions of 1024 x 768 pixels.{' '}
            </p>
          </div>
        </div>
      </Router>
    </div>
  );
}
