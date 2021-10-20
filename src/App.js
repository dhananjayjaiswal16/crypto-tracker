import React from 'react';
import './App.css';

import { Switch, Link, Route } from 'react-router-dom';
import { Typography, Space, Layout, Avatar } from 'antd'

import { Navbar, Homepage, Cryptocurrencies, Crypto, Exchanges, News } from './components/components';
import reactLogo from './images/react-2.svg'
import reduxLogo from './images/redux_Logo.png'
const App = () => {
  return (
    <div className='app'>
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
                <Cryptocurrencies />
              </Route>
              <Route exact path='/crypto/:coinId'>
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
            <span>Made with <Avatar src={reactLogo} size='default' /> and <Avatar src={reduxLogo} size='default' /> by <a href='https://github.com/dhananjayjaiswal16'>DJ</a></span>

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
