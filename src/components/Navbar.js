import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Typography, Menu, Button, Avatar } from 'antd';
import { HomeOutlined, MenuOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';
import image from '../images/cryptoo.png';
const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);


    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
        if (screenSize <= 800) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    const hamClose = () => (
        screenSize <= 800 ? setActiveMenu(!activeMenu) : setActiveMenu(activeMenu)
    )


    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={image} size='large' style={{ height: '35px', width: '35px' }} />
                <Typography.Title className='logo' level={3}>
                    <Link to='/'>Crypto Tracker</Link>
                </Typography.Title>
                <Button
                    className='menu-control-container'
                    onClick={() => setActiveMenu(!activeMenu)}
                >
                    <MenuOutlined style={{ color: '#0071BD' }} />
                </Button>
            </div>
            {activeMenu && (
                <Menu theme='dark'>
                    <Menu.Item icon={<HomeOutlined />} onClick={hamClose}>
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />} onClick={hamClose}>
                        <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined />} onClick={hamClose}>
                        <Link to='/exchanges'>Crypto Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />} onClick={hamClose}>
                        <Link to='/news'>News</Link>
                    </Menu.Item>
                </Menu>
            )}

        </div>
    )
}

export default Navbar;
