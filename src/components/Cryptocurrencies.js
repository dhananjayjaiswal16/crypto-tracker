import React, { useEffect, useState } from 'react';
import { Row, Col, Input, Card } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../sevices/cryptoApi';
import millify from 'millify';

const Cryptocurrencies = ({ simplified }) => {
    const count = (simplified === undefined) ? 100 : 10;
    const { data: cryptoData, isFetching } = useGetCryptosQuery(count);
    const cryptoCurrencyData = cryptoData?.data?.coins;
    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        setCryptos(cryptoCurrencyData);
    }, []);
    console.log("cryptos", cryptos);
    if (isFetching) return 'Loading...';
    return (
        <>
            <Row className='crypto-card-container' gutter={[36, 36]}>
                {cryptoCurrencyData?.map((coin) => (
                    <Col className='crypto-card' xs={24} sm={12} md={8} lg={6} key={coin?.id}>
                        <Link to={`/crypto/${coin?.id}`}>
                            <Card title={`${coin?.rank}) ${coin?.name}`} extra={<img src={coin?.iconUrl} className='crypto-image' />} hoverable>
                                <p>Price: {millify(coin?.price)}</p>
                                <p>Market Cap: {millify(coin?.marketCap)}</p>
                                <p>Daily Change: {millify(coin?.change)}%</p>
                                <p>Circulating Supply: {coin?.circulatingSupply && millify(coin?.circulatingSupply)}</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Cryptocurrencies;