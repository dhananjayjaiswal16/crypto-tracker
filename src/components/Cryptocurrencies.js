import React, { useEffect, useState } from 'react';
import { Row, Col, Input, Card } from 'antd';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { useGetCryptosQuery } from '../sevices/cryptoApi';
import millify from 'millify';

const Cryptocurrencies = ({ simplified }) => {
  const count = (simplified === undefined) ? 100 : 10;
  const { data: cryptoData, isFetching } = useGetCryptosQuery(count);
  const cryptoCurrencyData = cryptoData?.data?.coins;
  const [cryptos, setCryptos] = useState(cryptoCurrencyData);
  const [search, setSearch] = useState('');
  // console.log("cryptos", cryptos);

  useEffect(() => {

    const filteredData = cryptoData?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

    setCryptos(filteredData);
  }, [cryptoData, search]);

  if (isFetching) return <Loader />;
  return (
    <>
      {!simplified && <div className='search-crypto'>
        <Input placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
      </div>}
      <Row className='crypto-card-container' gutter={[36, 36]}>
        {cryptos?.map((coin) => (
          <Col className='crypto-card' xs={24} sm={12} md={8} lg={6} key={coin?.id}>
            <Link to={`/crypto/${coin?.uuid}`}>
              <Card title={`${coin?.rank}) ${coin?.name}`} extra={<img src={coin?.iconUrl} className='crypto-image' alt='crypto-img' />} hoverable>
                <p>Price: ${(coin?.price < 0.01) ? (
                  millify(coin?.price, {
                    precision: 6
                  })
                ) : (
                  millify(coin?.price, {
                    precision: 2
                  })
                )
                }</p>
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