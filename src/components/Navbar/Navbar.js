import React from 'react';
import { Link } from 'react-router-dom'
import { Typography, Menu, Button, Avatar } from 'antd';
import { HomeOutlined, MenuOutlined, MoneyCollectOutlined, BulbOutlined } from '@ant-design/icons';
import image from '../../images/crypto-img.png';
const Navbar = () => {
    return (
        <div className="navbarContainer">
            <div className="logoContainer">
                <Avatar src={image} size='large' />
                <Typography.Title className='logo' level={2}>
                    <Link to='/'>Crypto Tracker</Link>
                </Typography.Title>
            </div>
        </div>
    )
}

export default Navbar;
