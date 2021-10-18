import React from 'react';
import { Link } from 'react-router-dom'
import { Typography, Menu, Button, Avatar } from 'antd';
import { HomeOutlined, MenuOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';
import image from '../images/cryptoo.png';
const Navbar = () => {
    return (
        <div className='navContainer'>
            <div className='logoContainer'>
                <Avatar src={image} size='large' style={{ height: '40px', width: '40px' }} />
                <Typography.Title className='logo' level={2}>
                    <Link to='/' className='headerText'>Crypto Tracker</Link>
                </Typography.Title>
            </div>
            <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to='/exchanges'>Crypto Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to='/news'>News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar;
