import React from 'react';
import { Link } from 'react-router-dom'
import { Typography, Menu, Button, Avatar } from 'antd';
import { HomeOutlined, MenuOutlined, MoneyCollectOutlined, BulbOutlined } from '@ant-design/icons';

const Navbar = () => {
    return (
        <div className="navbarContainer">
            <div className="logoContainer">
                <Avatar />
                <Typography.Title>
                    <Link to='/'>Crypto Tracker</Link>
                </Typography.Title>
            </div>
        </div>
    )
}

export default Navbar;
