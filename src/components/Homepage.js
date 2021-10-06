import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Statistic, Row, Col } from 'antd'
import millify from 'millify';

import { useGetCryptosQuery } from '../sevices/cryptoApi';

const { Title } = Typography;
const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery();
    const globalStats = data?.data?.stats;
    return (
        <>
            <Title className='' level={2} >Crypto Stats</Title>
            <Row>
                <Col span={8}><Statistic title='Total Cryptocurrencies' value={globalStats?.total} /></Col>
                <Col span={8}><Statistic title='Total Market Cap' value={millify(globalStats?.totalMarketCap)} /></Col>
                <Col span={8}><Statistic title='Total Exchanges' value={millify(globalStats?.totalExchanges)} /></Col>
                <Col span={8}><Statistic title='Total 24h volume' value={millify(globalStats?.total24hVolume)} /></Col>
                <Col span={8}><Statistic title='Total Market' value={millify(globalStats?.totalMarkets)} /></Col>
            </Row>
        </>
    )
}

export default Homepage;