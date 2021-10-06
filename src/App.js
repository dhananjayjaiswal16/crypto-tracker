import React from 'react';
import './App.css';

import { Switch, Link, Route } from 'react-router-dom';
import { Typography, Space, Layout, Avatar } from 'antd'

import { Navbar, Homepage, Crytocurrencies, Crypto, Exchanges, News } from './components/components';
import reactLogo from './images/react-logo.png'
const App = () => {
  return (
    <div className="app">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path='/'>
                <Homepage />
              </Route>
              <Route exact path='/cryptocurrencies'>
                <Crytocurrencies />
              </Route>
              <Route exact path='/crypto/coin:id'>
                <Crypto />
              </Route>
              <Route exact path='/exchanges'>
                <Exchanges />
              </Route>
              <Route exact path='/news'>
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title level={5} style={{ textAlign: 'center', color: '#fff' }}>
            Crypto Tracker <br />
            Made with <Avatar src={reactLogo} size='default' style={{ position: 'relative', top: '-2px' }} /> by <a href='https://github.com/dhananjayjaiswal16'>DJ</a>

          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>

        </div>
      </div>

    </div>
  );
}

export default App;
