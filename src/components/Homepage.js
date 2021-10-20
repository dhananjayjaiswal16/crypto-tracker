import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Statistic, Row, Col } from 'antd'
import millify from 'millify';
import Loader from './Loader';
import { useGetCryptosQuery } from '../sevices/cryptoApi';

import { Cryptocurrencies, News } from './components';

const { Title } = Typography;
const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);

    const globalStats = data?.data?.stats;

    if (isFetching) {
        return <Loader />;
    }

    return (
        <>
            <Title className='heading' level={2} >Crypto Stats</Title>
            <Row gutter={[16, 16]}>
                <Col sm={12} md={8}><Statistic title='Total Cryptocurrencies' value={globalStats?.total} /></Col>
                <Col sm={12} md={8}><Statistic title='Total Market Cap' value={millify(globalStats?.totalMarketCap)} /></Col>
                <Col sm={12} md={8}><Statistic title='Total Exchanges' value={millify(globalStats?.totalExchanges)} /></Col>
                <Col sm={12} md={8}><Statistic title='Total 24h volume' value={millify(globalStats?.total24hVolume)} /></Col>
                <Col sm={12} md={8}><Statistic title='Total Market' value={millify(globalStats?.totalMarkets)} /></Col>
            </Row>
            <div className='home-heading-container'>
                <Title className='home-title' level={2}>Top 10 Cryptocurrencies</Title>
                <Title className='show-more' level={3}><Link to='/cryptocurrencies'>Show More</Link></Title>
            </div>
            <Cryptocurrencies simplified={true} />
            <div className='home-heading-container'>
                <Title className='home-title' level={2}>Latest Crypto News</Title>
                <Title className='show-more' level={3}><Link to='/news'>Show More</Link></Title>
            </div>
            <News simplified={true} />
        </>
    )
}

export default Homepage;